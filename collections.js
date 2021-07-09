const ProfileImage = props => {
  return (
    <div
    className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded"
    data-test="image-block-inline-outer-wrapper"
    id="yui_3_17_2_1_1624821117171_517"
  >
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
  </div>
  );
};

const Links = props => {
  const { website, facebook, instagram, twitter } = props.data;
  
  const formatTwitter = url => {
    // Extract Twitter username
    return url.startsWith('http') ? `@${url.substring(url.lastIndexOf('/') + 1)}` : 
      (url.startsWith('@') ? url : `@${url}`);
  };
  
  const formatUrl = url => {
    // Format url by extracting the first part not including spaces and including http.
    let result = url.split(' ').map(part => part.trim()).filter(part => part.length > 0);
    result = result.length > 0 ? result[0] : url;

    return result.startsWith('http') ? result : `http://${result}`;
  };

  return (
    <div className="links">
      <p className style={{ whiteSpace: "pre-wrap" }}>
        <strong>Connect with the Author:</strong>
      </p>
    { website && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fas fa-link" style={{ marginRight: "5px" }}></i>
        <a href={formatUrl(website)} target="_blank">
          {formatUrl(website)}
        </a>
      </p> }
    { facebook && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fab fa-facebook-f" style={{ marginRight: "5px" }}></i>
        <a href={formatUrl(facebook)} target="_blank">
          {formatUrl(facebook)}
        </a>
      </p> }
    { instagram && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fab fa-instagram" style={{ marginRight: "5px" }}></i>
        <a href={formatUrl(instagram)} target="_blank">
          {formatUrl(instagram)}
        </a>
      </p> }
    { twitter && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fab fa-twitter" style={{ marginRight: "5px" }}></i>
        <a
          href={ `http://twitter.com/${formatTwitter(twitter).substring(1)}` } target="_blank">
          {formatTwitter(twitter)}
        </a>
      </p> }
    </div>
  );
};

const Questions = props => {
  return (
    <div className="questions">
      { props.data.map(question => {
        return question.value ? (
          <div className='question' style={{ marginBottom: "10px" }}>
            <p style={{ whiteSpace: "pre-wrap" }}>
              <strong>{question.name}</strong>
            </p>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {question.value}
            </p>
          </div>
        ) : <div/>;
      })}
    </div>
  );
};

const Author = props => {
  const author = props.data;
  return (
    <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_521">
      <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_520">
        <div className="col sqs-col-5 span-5" id="yui_3_17_2_1_1624821117171_519">
          <div
            className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready"
            data-block-type={5}
            id="block-yui_3_17_2_1_1601414526373_54455"
          >
            <div className="sqs-block-content" id="yui_3_17_2_1_1624821117171_518">
              <ProfileImage url={author.profileImage}/>
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
              <p className style={{ whiteSpace: "pre-wrap" }}>
                <strong>Buy the Book:</strong>
              </p>
              <p className style={{ whiteSpace: "pre-wrap" }}>
                {author.bookInformation}
              </p>
              <div className="sqs-block-content" id="yui_3_17_2_1_1624821117171_518">
                <img src={author.bookImage} style={{ maxWidth: '200px' }}/>
              </div>
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
}

const Poet = props => {
  const author = props.data;
  return (
    <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_521">
      <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_520">
        <div className="col sqs-col-5 span-5" id="yui_3_17_2_1_1624821117171_519">
          <div
            className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready"
            data-block-type={5}
            id="block-yui_3_17_2_1_1601414526373_54455"
          >
            <div className="sqs-block-content" id="yui_3_17_2_1_1624821117171_518">
              <ProfileImage url={author.profileImage}/>
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
}

const YoungAdult = props => {
  const author = props.data;
  return (
    <div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_521">
      <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_520">
        <div className="col sqs-col-5 span-5" id="yui_3_17_2_1_1624821117171_519">
          <div
            className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready"
            data-block-type={5}
            id="block-yui_3_17_2_1_1601414526373_54455"
          >
            <div className="sqs-block-content" id="yui_3_17_2_1_1624821117171_518">
              <ProfileImage url={author.profileImage}/>
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
              <Questions data={author.questions}/>
              <Links data={author} />
              <p className style={{ whiteSpace: "pre-wrap" }}>
                <strong>Buy the Book:</strong>
              </p>
              <p className style={{ whiteSpace: "pre-wrap" }}>
                {author.bookInformation}
              </p>
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
}

const Progress = props => {
  const url = props.url || 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.5/images/bx_loader.gif';
  const title = props.title || "Loading...";

  return (
    <div className='spinner' style={{ marginLeft: '50%', marginTop: '20%' }}>
      <img src={ url } title={ title }/>
    </div>
  );
};

const Error = props => {
  const url = props.url || 'https://img.icons8.com/material-outlined/48/000000/database-error.png';
  const title = props.title || "No content available.";

  return (
    <div className='no-content'>
      <div className='no-content-icon' style={{ float: 'left' }}>
        <img src={ url } title={ title }/>
      </div>
      <div className='no-content-title' style={{ paddingTop: '15px' }}>
        { title }
      </div>
    </div>
  );
};

const AuthorCollection = props => {
  const { useState, useEffect } = React;
  const [loading, setLoading] = useState(true);
  const [data, updateData] = useState();
  const Inner = props.manager.control;
  
  useEffect(() => {
    // Load data-source and process rows.
    const getData = async () => updateData(await load(props.manager.id));
    getData();
  }, []);
  
  const load = async spreadsheetId => {
    const rows = [];
    const defaultUrl = 'https://spreadsheets.google.com/feeds/list/[ID]/default/public/values?alt=json';

    try {
      if (spreadsheetId) {
        const url = spreadsheetId.startsWith('http') ? spreadsheetId : defaultUrl.replace('[ID]', spreadsheetId);

        // Download the data-source.
        const res = await fetch(url);
    
        // Convert to JSON.
        const data = await res.json();
        //console.log(data.feed.entry);
    
        // Parse each row into an object.
        data.feed.entry.forEach(row => rows.push(props.manager.parse(row)));
      }
    }
    catch (ex) {
      console.error(`Error downloading and parsing url ${url}\n${ex}`);
    }
    finally {
      setLoading(false);
    }
  
    return rows;
  };

  const byTwo = data => {
    return data.reduce(function (rows, key, index) { 
      return (index % 2 == 0 ? rows.push([key]) 
        : rows[rows.length-1].push(key)) && rows;
      }, []);
  };
  
  return (
    <div id="author-collection">
      <div id="custom-list">
        { loading ? <Progress url={props.progressUrl} title={props.progressTitle} /> : 
          data && data.length ? byTwo(data).map(row => {
            return (
              <div className='row sqs-row'>
                { row.map(item => (<Inner data={item} />)) }
              </div>
            );
          }) : <Error url={props.errorUrl} title={props.errorTitle} />
        }
      </div>
    </div>
  );
};

const commonManager = {
  fields: [
    'author',
    'poet',
    'biography',
    'bookInformation',
    'website',
    'facebook',
    'instagram',
    'twitter',
    'profileImage'
  ],

  values: (row, fields) => {
    // Parse each field from the row.
    return fields.map(field => commonManager.value(row, field));
  },

  value: (row, field) => {
    const prefix = 'gsx$';
    const suffix = '$t';
    const key = prefix + field.toLowerCase();

    // Parse a field from the row.
    return row[key] ? row[key][suffix] : null;
  },

  parse: (row, fields = commonManager.fields) => {
    const result = {};
    const names = [
      'author', 
      'poet'
    ];

    // Convert the fields to an array, if needed.
    fields = typeof(fields) === 'object' ? fields : [fields];
    const values = commonManager.values(row, fields);

    // Assign each value to the result object.
    fields.forEach((field, i) => {
      // Rename the field key 'author' and 'poet' to 'name'.
      field = names.includes(field) ? 'name' : field;
      result[field] = result[field] || values[i];
    });

    return result;
  }
};

const authorManager = {
  id: '1BK4XdUygRcUGAiQSne10aNjV_uLaLPT2u0NPFicCX6Q',
  control: Author,
  parse: row => {
    return {
      date: parse(row, 'date'),
      name: parse(row, 'name'),
      url: parse(row, 'imageurl'),
    };
  }
};

const adultAuthorManager = {
  id: '1jR6Go99u37VAE5XfhRRvLhNSG3-ikVZS9qY_IZFK0iI',
  control: Author,
  parse: row => Object.assign(
    commonManager.parse(row),
    commonManager.parse(row, 'bookImage'),
  )
};

const poetAuthorManager = {
  id: '1xWo0lsrmHYf63RfYJPkDzML0BprTVvJLK6ifhp-mXaA',
  control: Poet,
  parse: row => commonManager.parse(row)
};

const youngAdultAuthorManager = {
  id: '1YRRQ4N5Eoplae7YpwNBJAIbMSzelIUURNRCjHu6pFl4',
  control: YoungAdult,
  parse: row => Object.assign(
    commonManager.parse(row),
    { questions: [
      {
        name: "What's your favorite thing about meeting with readers?", 
        value: commonManager.value(row, 'whatsyourfavoritethingaboutmeetingwithreaders')
      },
      { 
        name: "What is the weirdest question you've ever gotten from a reader?", 
        value: commonManager.value(row, 'whatistheweirdestquestionyouveevergottenfromareader') 
      },
      { 
        name: "What are you most looking forward to about the Collingswood Book Festival?", 
        value: commonManager.value(row, 'whatareyoumostlookingforwardtoaboutthecollingswoodbookfestivalifyouvebeenherebefore') 
      },
    ]}
  ),
};
