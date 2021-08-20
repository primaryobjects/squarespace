const Progress = (props) => {
  const url =
    props.url ||
    "https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/images/bx_loader.gif";
  const title = props.title || "Loading...";

  return (
    <div className="spinner">
      <img src={url} title={title} />
    </div>
  );
};

const SpreadsheetUpdate = (props) => {
  const { useState } = React;
  const [loading, setLoading] = useState();
  const [apiKey, setApiKey] = useState();
  const [status, setStatus] = useState();
  const [selections, setSelections] = useState({});

  const config = {
    user: 'primaryobjects',
    repository: 'squarespace',
    branch: 'test'
  };

  const collections = [
    adultAuthorManager,
    youngAdultAuthorManager,
    poetAuthorManager,
    childAuthorManager,
  ];

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const commit = async (path, content, apiKey, message) => {
    const github = new GitHub({
      token: apiKey,
    });

    const repo = github.getRepo(config.user, config.repository);

    const branches = await repo.listBranches();
    const branch = branches.data.find(branch => branch.name === config.branch)
    !branch && await repo.createBranch('main', config.branch);

    return await repo.writeFile(
      config.branch, // e.g. 'master'
      path, // e.g. 'blog/index.md'
      content, // e.g. 'Hello world, this is my new content'
      message, // e.g. 'Created new index'
    );
  };

  const download = async (url) => {
    // Download the file from the url.
    let res = await fetch(url);

    // If the response was redirected, get the redirected URL.
    if (res.redirected) {
      res = await fetch(res.url);
    }

    // Decode the response body to a string.
    const decoder = new TextDecoder('utf-8');
    const content = await res.body.getReader().read();

    // Return the decoded content.
    return decoder.decode(content.value);
  };

  const onUpdate = async (e) => {
    const retries = 1;
    const defaultUrl =
      props.url ||
      "https://docs.google.com/spreadsheets/d/e/[ID]/pub?output=csv";

    e.preventDefault();

    try {
      setLoading(true);

      // Find selected collections from the checkboxes.
      const keys = Object.keys(selections);
      for (let i=0; i<keys.length; i++) {
        const key = keys[i];
        const selection = selections[key];
        if (selection.checked) {
          const url = defaultUrl.replace("[ID]", selection.collection.id);

          let count = 0;
          while (count++ < retries) {
            try {
              // Download the data-source.
              const content = await download(url);

              // Copy data to GitHub.
              const path = `data/${selection.collection.name}.csv`;
              const result = await commit(path, content, apiKey, `Updated ${selection.collection.name} csv.`);
              setStatus(`Updated ${path} - ${result.status}`);

              break;
            } catch (ex1) {
              await setStatus(`Unable to fetch ${selection.collection.name} using ${url}, attempt ${count}/${retries}.\n${ex1}`);
              console.warn(status);
              await sleep(1000);
            }
          }
        }
      }
    } catch (ex2) {
      await setStatus(`Error in onUpdate: ${ex2}`);
      console.error(status);
    } finally {
      setLoading(false);
    }

    return false;
  };

  const onUpdateSelection = (e, collection) => {
    const { name, checked } = e.target;

    // Update selections from checkboxes.
    selections[name] = { checked, collection };
    setSelections(selections);
  };

  return (
    <div id="spreadsheet-update">
      <div
        className="spreadsheet-update-status"
        style={{ float: "left", margin: "0 10px 0 0" }}
      >
        <form>
          <div class="mb-3">
            <label for="githubApiKey" class="form-label">
              GitHub API Key
            </label>
            <input
              type="password"
              class="form-control"
              id="githubApiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <div><b>Spreadsheets</b></div>
              {collections.map((collection) => (
                <div>
                  <input
                    type="checkbox"
                    class="form-control"
                    name={collection.name}
                    id={collection.name}
                    defaultChecked={selections[collection.name] && selections[collection.name].checked}
                    onChange={(e) => { onUpdateSelection(e, collection)}}
                  />
                  <label for={collection.name} class="form-label">
                    {collection.name[0].toUpperCase() + collection.name.slice(1)} Authors
                  </label>
                </div>
            ))}
          </div>
          <button type="submit" class="btn btn-primary" onClick={onUpdate}>
            Update
          </button>
        </form>
        <div id="status" style={{ fontSize: "12px", color: "#c0c0c0" }}>
          {status}
        </div>
      </div>
      <div className="progress">{loading && <Progress />}</div>
    </div>
  );
};