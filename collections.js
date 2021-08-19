const ProfileImage = (props) => {
  return (
    <div
      className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded"
      data-test="image-block-inline-outer-wrapper"
      id="yui_3_17_2_1_1624821117171_517"
    >
      {props.url && (
        <figure
          className="
          sqs-block-image-figure
          intrinsic
          "
          style={{ maxWidth: "828px" }}
          id="yui_3_17_2_1_1624821117171_516"
        >
          <div
            style={{ paddingBottom: "113.889%", overflow: "hidden" }}
            className="
          image-block-wrapper
          has-aspect-ratio
          "
            data-animation-role="image"
            id="yui_3_17_2_1_1624821117171_515"
          >
            <img
              className="thumb-image loaded"
              data-src={props.url}
              data-image={props.url}
              data-image-dimensions="828x943"
              data-image-focal-point="0.5,0.5"
              data-load="false"
              data-image-id="5f73a64abdc51f78805cb242"
              data-type="image"
              data-image-resolution="300w"
              src={props.url}
            />
          </div>
        </figure>
      )}
    </div>
  );
};

const Links = (props) => {
  const { website, facebook, instagram, twitter } = props.data;
  const isLinks = website || facebook || instagram || twitter;

  const formatTwitter = (url) => {
    // Extract Twitter username
    return url.startsWith("http")
      ? `@${url.substring(url.lastIndexOf("/") + 1)}`
      : url.startsWith("@")
      ? url
      : `@${url}`;
  };

  const formatUrl = (url) => {
    // Format url by extracting the first part not including spaces and including http.
    let result = url
      .split(" ")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);
    result = result.length > 0 ? result[0] : url;

    return result.startsWith("http") ? result : `http://${result}`;
  };

  return (
    <div className="links">
      {isLinks && (
        <div className="links-content">
          <p className style={{ whiteSpace: "pre-wrap" }}>
            <strong>Connect with the Author:</strong>
          </p>
          {website && (
            <p className style={{ whiteSpace: "pre-wrap" }}>
              <i className="fas fa-link" style={{ marginRight: "5px" }}></i>
              <a href={formatUrl(website)} target="_blank">
                {formatUrl(website)}
              </a>
            </p>
          )}
          {facebook && (
            <p className style={{ whiteSpace: "pre-wrap" }}>
              <i
                className="fab fa-facebook-f"
                style={{ marginRight: "5px" }}
              ></i>
              <a href={formatUrl(facebook)} target="_blank">
                {formatUrl(facebook)}
              </a>
            </p>
          )}
          {instagram && (
            <p className style={{ whiteSpace: "pre-wrap" }}>
              <i
                className="fab fa-instagram"
                style={{ marginRight: "5px" }}
              ></i>
              <a href={formatUrl(instagram)} target="_blank">
                {formatUrl(instagram)}
              </a>
            </p>
          )}
          {twitter && (
            <p className style={{ whiteSpace: "pre-wrap" }}>
              <i className="fab fa-twitter" style={{ marginRight: "5px" }}></i>
              <a
                href={`http://twitter.com/${formatTwitter(twitter).substring(
                  1
                )}`}
                target="_blank"
              >
                {formatTwitter(twitter)}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Questions = (props) => {
  return (
    <div className="questions">
      {props.data.map((question) => {
        return question.value ? (
          <div className="question" style={{ marginBottom: "10px" }}>
            <p style={{ whiteSpace: "pre-wrap" }}>
              <strong>{question.name}</strong>
            </p>
            <p style={{ whiteSpace: "pre-wrap" }}>{question.value}</p>
          </div>
        ) : (
          <div />
        );
      })}
    </div>
  );
};

const Book = (props) => {
  const { bookInformation, bookImage } = props.data;

  return (
    <div className="book">
      {!props.isHideText && bookInformation && (
        <div class="bookText">
          <p className style={{ whiteSpace: "pre-wrap" }}>
            <strong>{props.title || "Buy the Book"}:</strong>
          </p>
          <p className style={{ whiteSpace: "pre-wrap" }}>
            {bookInformation}
          </p>
        </div>
      )}
      {bookImage && (
        <div className="sqs-block-content" id="yui_3_17_2_1_1624821117171_518">
          <img src={bookImage} style={{ maxWidth: "200px" }} />
        </div>
      )}
    </div>
  );
};

const Author = (props) => {
  const author = props.data;
  return (
    <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_521">
      <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_520">
        <div
          className="col sqs-col-5 span-5"
          id="yui_3_17_2_1_1624821117171_519"
        >
          <div
            className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready"
            data-block-type={5}
            id="block-yui_3_17_2_1_1601414526373_54455"
          >
            <div
              className="sqs-block-content"
              id="yui_3_17_2_1_1624821117171_518"
            >
              <ProfileImage url={author.profileImage} />
            </div>
          </div>
          <div
            className="sqs-block html-block sqs-block-html"
            data-block-type={2}
            id="block-1e88d17bec83c8e26856"
          >
            <div className="sqs-block-content">
              <h4 style={{ whiteSpace: "pre-wrap" }}>{author.name}</h4>
              <p className style={{ whiteSpace: "pre-wrap" }}>
                {author.biography}
              </p>
              <Links data={author} />
              {!props.isHideBook && (
                <Book
                  data={author}
                  title={props.booksHeading}
                  isHideText={props.isHideBookText}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col sqs-col-1 span-1">
          <div
            className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
            data-block-type={21}
            id="block-f2bc30f609edf7e6a224"
          >
            <div className="sqs-block-content">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Poet = (props) => {
  const author = props.data;
  return (
    <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_521">
      <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_520">
        <div
          className="col sqs-col-5 span-5"
          id="yui_3_17_2_1_1624821117171_519"
        >
          <div
            className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready"
            data-block-type={5}
            id="block-yui_3_17_2_1_1601414526373_54455"
          >
            <div
              className="sqs-block-content"
              id="yui_3_17_2_1_1624821117171_518"
            >
              <ProfileImage url={author.profileImage} />
            </div>
          </div>
          <div
            className="sqs-block html-block sqs-block-html"
            data-block-type={2}
            id="block-1e88d17bec83c8e26856"
          >
            <div className="sqs-block-content">
              <h4 style={{ whiteSpace: "pre-wrap" }}>{author.name}</h4>
              <p className style={{ whiteSpace: "pre-wrap" }}>
                {author.biography}
              </p>
              <Links data={author} />
            </div>
          </div>
        </div>
        <div className="col sqs-col-1 span-1">
          <div
            className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
            data-block-type={21}
            id="block-f2bc30f609edf7e6a224"
          >
            <div className="sqs-block-content">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YoungAdult = (props) => {
  const author = props.data;
  return (
    <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_521">
      <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_520">
        <div
          className="col sqs-col-5 span-5"
          id="yui_3_17_2_1_1624821117171_519"
        >
          <div
            className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready"
            data-block-type={5}
            id="block-yui_3_17_2_1_1601414526373_54455"
          >
            <div
              className="sqs-block-content"
              id="yui_3_17_2_1_1624821117171_518"
            >
              <ProfileImage url={author.profileImage} />
            </div>
          </div>
          <div
            className="sqs-block html-block sqs-block-html"
            data-block-type={2}
            id="block-1e88d17bec83c8e26856"
          >
            <div className="sqs-block-content">
              <h4 style={{ whiteSpace: "pre-wrap" }}>{author.name}</h4>
              <p className style={{ whiteSpace: "pre-wrap" }}>
                {author.biography}
              </p>
              <Questions data={author.questions} />
              <Links data={author} />
              {!props.isHideBook && (
                <Book data={author} title={props.booksHeading} />
              )}
            </div>
          </div>
        </div>
        <div className="col sqs-col-1 span-1">
          <div
            className="sqs-block spacer-block sqs-block-spacer sized vsize-1"
            data-block-type={21}
            id="block-f2bc30f609edf7e6a224"
          >
            <div className="sqs-block-content">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Progress = (props) => {
  const url =
    props.url ||
    "https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/images/bx_loader.gif";
  const title = props.title || "Loading...";

  return (
    <div className="spinner" style={{ marginLeft: "50%", marginTop: "20%" }}>
      <img src={url} title={title} />
    </div>
  );
};

const Error = (props) => {
  const url =
    props.url ||
    "https://img.icons8.com/material-outlined/48/000000/database-error.png";
  const title = props.title || "No content available.";

  return (
    <div className="no-content">
      <div className="no-content-icon" style={{ float: "left" }}>
        <img src={url} title={title} />
      </div>
      <div className="no-content-title" style={{ paddingTop: "15px" }}>
        {title}
      </div>
    </div>
  );
};

const AuthorCollection = (props) => {
  const { useState, useEffect } = React;
  const [loading, setLoading] = useState(true);
  const [data, updateData] = useState();
  const Inner = props.manager.control;

  useEffect(() => {
    // Load data-source and process rows.
    const getData = async () =>
      updateData(await load(props.manager.name, props.id || props.manager.id, props.version, props.retries || 10));
    getData();
  }, []);

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const load = async (name, spreadsheetId, version, retries) => {
    const rows = [];
    const defaultCdn = `https://cdn.jsdelivr.net/gh/primaryobjects/squarespace${version ? `@${version}` : ''}/data/${name}.csv`;
    const defaultUrl =
      props.url ||
      defaultCdn ||
      "https://docs.google.com/spreadsheets/d/e/[ID]/pub?output=csv";

    try {
      if (spreadsheetId) {
        const url = spreadsheetId.startsWith("http")
          ? spreadsheetId
          : defaultUrl.replace("[ID]", spreadsheetId);

        let count = 0;
        while (count++ < retries) {
          try {
            // Download the data-source.
            const csv = await new Promise(resolve => {
              Papa.parse(url, {
                download: true,
                header: true,
                complete: function(results) {
                  resolve(results);
                }
              });
            });

            // Parse each row into an object.
            csv.data.forEach((row) => rows.push(props.manager.parse(row)));

            break;
          } catch (ex1) {
            console.warn(`Unable to fetch ${url}, attempt ${count}/${retries}.`);
            await sleep(1000);
          }
        }
      }
    } catch (ex2) {
      console.error(`Error downloading and parsing url ${url}\n${ex2}`);
    } finally {
      setLoading(false);
    }

    return rows;
  };

  const byTwo = (data) => {
    return data.reduce(function (rows, key, index) {
      return (
        (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
        rows
      );
    }, []);
  };

  return (
    <div id="author-collection">
      <div id="custom-list">
        {loading ? (
          <Progress url={props.progressUrl} title={props.progressTitle} />
        ) : data && data.length ? (
          byTwo(data).map((row) => {
            return (
              <div className="row sqs-row">
                {row.map((item) => (
                  <Inner
                    data={item}
                    isHideBook={props.isHideBook}
                    isHideBookText={props.isHideBookText}
                    booksHeading={props.booksHeading}
                  />
                ))}
              </div>
            );
          })
        ) : (
          <Error url={props.errorUrl} title={props.errorTitle} />
        )}
      </div>
    </div>
  );
};

const parse = (row, field) =>
  row[field] ? row[field] : null;

const authorManager = {
  id: "1BK4XdUygRcUGAiQSne10aNjV_uLaLPT2u0NPFicCX6Q",
  control: Author,
  parse: (row) => {
    return {
      date: parse(row, "date"),
      name: parse(row, "name"),
      url: parse(row, "imageurl"),
    };
  },
};

const adultAuthorManager = {
  name: 'adult',
  id: "2PACX-1vSy8LiifhZPF8eJjTB7Pk0Jfvpxew3tfQ6pjlMiMF17Sbfw85dpaSq0TK-aKTNe7eQkiXNFdA7bghp5",
  control: Author,
  parse: (row) => {
    return {
      name: parse(row, "Author"),
      biography: parse(row, "Biography"),
      bookInformation: parse(row, "Book Information"),
      website: parse(row, "Website"),
      facebook: parse(row, "Facebook"),
      instagram: parse(row, "Instagram"),
      twitter: parse(row, "Twitter"),
      profileImage: parse(row, "Profile Image"),
      bookImage: parse(row, "Book Image"),
    };
  },
};

const poetAuthorManager = {
  name: 'poet',
  id: "2PACX-1vQuT1uVIb3aMD3bxnpkXMKVzEc9LSKGLdRRvM53VXDIANVx2l5TEvH7OciFC7rHjZ3FWuietaugkjji",
  control: Poet,
  parse: (row) => {
    return {
      name: parse(row, "Poet"),
      biography: parse(row, "Biography"),
      website: parse(row, "Website"),
      facebook: parse(row, "Facebook"),
      instagram: parse(row, "Instagram"),
      twitter: parse(row, "Twitter"),
      profileImage: parse(row, "ProfileImage"),
    };
  },
};

const youngAdultAuthorManager = {
  name: 'youngAdult',
  id: "2PACX-1vStJm3bQ8MQ3VrLxg40BpUnUKltukDsih0gWPStoZAcXc82utOpkB1125mrqx_qPrDBTFj129EFaFv2",
  control: YoungAdult,
  parse: (row) => {
    return {
      name: parse(row, "Author"),
      biography: parse(row, "Biography"),
      bookInformation: parse(row, "Book Information"),
      website: parse(row, "Website"),
      facebook: parse(row, "Facebook"),
      instagram: parse(row, "Instagram"),
      twitter: parse(row, "Twitter"),
      profileImage: parse(row, "ProfileImage"),
      questions: [
        {
          name: "What's your favorite thing about meeting with readers?",
          value: parse(row, "What's your favorite thing about meeting with readers?"),
        },
        {
          name: "What is the weirdest question you've ever gotten from a reader?",
          value: parse(
            row,
            "What is the weirdest question you've ever gotten from a reader?"
          ),
        },
        {
          name: "What are you most looking forward to about the Collingswood Book Festival?",
          value: parse(
            row,
            "What are you most looking forward to about the Collingswood Book Festival? (if you've been here before)"
          ),
        },
      ],
    };
  },
};

const childAuthorManager = {
  name: 'child',
  id: "2PACX-1vR8L4a2asSglWwhj8iZXyaFt_pGavdgZRMx6C5rN8HDw8AnrKWCQUR6vrNIIdOhboaIjn3OeFwBlJ3I",
  control: Author,
  parse: (row) => {
    return {
      name: parse(row, "Author Name"),
      website: parse(row, "Author Website"),
      facebook: parse(row, "Facebook"),
      instagram: parse(row, "Instagram"),
      twitter: parse(row, "Twitter"),
      profileImage: parse(row, "Profile Image"),
      bookInformation: [...Array(6)]
        .map((_, i) => `${parse(row, `Title - Book ${i + 1}`)}`)
        .join("\n")
        .replace(/null/g, '')
        .trim(),
    };
  },
};
