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
  const { useState, useEffect } = React;
  const [loading, setLoading] = useState();
  const [apiKey, setApiKey] = useState("");
  const [spreadsheetId, setSpreadsheetId] = useState("");
  const [status, setStatus] = useState("");

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const onUpdate = async (e) => {
    const retries = 10;
    const defaultUrl =
      props.url ||
      "https://docs.google.com/spreadsheets/d/e/[ID]/pub?output=csv";
    const url = spreadsheetId.startsWith("http")
      ? spreadsheetId
      : defaultUrl.replace("[ID]", spreadsheetId);

    e.preventDefault();

    try {
      setLoading(true);

      if (spreadsheetId) {
        let count = 0;
        while (count++ < retries) {
          try {
            // Download the data-source.
            let res = await fetch(url);
            if (res.redirected) {
              res = await fetch(res.url);
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder('utf-8');

            const content = await reader.read();
            const csv = decoder.decode(content.value);

            //
            // Copy data to GitHub.
            //
            console.log(csv);

            break;
          } catch (ex1) {
            setStatus(`Unable to fetch ${url}, attempt ${count}/${retries}.`);
            console.warn(status);
            await sleep(1000);
          }
        }
      }
    } catch (ex2) {
      setStatus(`Error downloading and parsing url ${url}\n${ex2}`);
      console.error(status);
    } finally {
      setLoading(false);
    }

    return false;
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
              type="text"
              class="form-control"
              id="githubApiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="spreadSheetId" class="form-label">
              Spreadsheet ID
            </label>
            <input
              type="text"
              class="form-control"
              id="spreadsheetId"
              value={spreadsheetId}
              onChange={(e) => setSpreadsheetId(e.target.value)}
            />
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
