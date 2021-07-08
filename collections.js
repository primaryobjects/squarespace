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
  
  return (
    <div className="links">
      <p className style={{ whiteSpace: "pre-wrap" }}>
        <strong>Connect with the Author:</strong>
      </p>
    { website && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fas fa-link" style={{ marginRight: "5px" }}></i>
        <a href={website} target="_blank">
          {website}
        </a>
      </p> }
    { facebook && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fab fa-facebook-f" style={{ marginRight: "5px" }}></i>
        <a href={facebook} target="_blank">
          {facebook}
        </a>
      </p> }
    { instagram && <p className style={{ whiteSpace: "pre-wrap" }}>
        <i className="fab fa-instagram" style={{ marginRight: "5px" }}></i>
        <a href={instagram} target="_blank">
          {instagram}
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

const AuthorCollection = props => {
  const { useState, useEffect } = React;
  const [data, updateData] = useState();
  const Inner = props.manager.control;
  
  useEffect(() => {
    // Load data-source and process rows.
    const getData = async () => updateData(await load(props.manager.url));
    getData();
  }, []);
  
  const load = async url => {
    const rows = [];
    
    if (url) {
      try {
        // Download the data-source.
        const res = await fetch(url);
    
        // Convert to JSON.
        const data = await res.json();
        //console.log(data.feed.entry);
    
        // Parse each row into an object.
        data.feed.entry.forEach(row => rows.push(props.manager.parse(row)));
      }
      catch (ex) {
        console.error(`Error downloading and parsing url ${url}\n${ex}`);
      }
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
        { data && data.length ? byTwo(data).map(row => {
          return (
            <div className='row sqs-row'>
              { row.map(item => (<Inner data={item} />)) }
            </div>
          );
        }) : <div>No authors found.</div> }
      </div>
    </div>
  );
};

const authorManager = {
  url: 'https://spreadsheets.google.com/feeds/list/1BK4XdUygRcUGAiQSne10aNjV_uLaLPT2u0NPFicCX6Q/od6/public/values?alt=json',
  control: Author,
  parse: row => {
    return {
      date: row['gsx$date']['$t'],
      name: row['gsx$name']['$t'],
      url: row['gsx$imageurl']['$t'],
    };
  }
};

const adultAuthorManager = {
  url: 'https://spreadsheets.google.com/feeds/list/1jR6Go99u37VAE5XfhRRvLhNSG3-ikVZS9qY_IZFK0iI/default/public/values?alt=json',
  control: Author,
  parse: row => {
    return {
      name: row['gsx$author']['$t'],
      biography: row['gsx$biography']['$t'],
      bookInformation: row['gsx$bookinformation']['$t'],
      website: row['gsx$website']['$t'],
      facebook: row['gsx$facebook']['$t'],
      instagram: row['gsx$instagram']['$t'],
      twitter: row['gsx$twitter']['$t'],
      profileImage: row['gsx$profileimage']['$t'],
      bookImage: row['gsx$bookimage']['$t'],
    };
  }
};


const poetAuthorManager = {
  url: 'https://spreadsheets.google.com/feeds/list/1xWo0lsrmHYf63RfYJPkDzML0BprTVvJLK6ifhp-mXaA/default/public/values?alt=json',
  control: Poet,
  parse: row => {
    return {
      name: row['gsx$poet']['$t'],
      biography: row['gsx$biography']['$t'],
      website: row['gsx$website']['$t'],
      facebook: row['gsx$facebook']['$t'],
      instagram: row['gsx$instagram']['$t'],
      twitter: row['gsx$twitter']['$t'],
      profileImage: row['gsx$profileimage']['$t'],
    };
  }
};

const youngAdultAuthorManager = {
  url: 'https://spreadsheets.google.com/feeds/list/1YRRQ4N5Eoplae7YpwNBJAIbMSzelIUURNRCjHu6pFl4/default/public/values?alt=json',
  control: YoungAdult,
  parse: row => {
    return {
      name: row['gsx$author']['$t'],
      biography: row['gsx$biography']['$t'],
      bookInformation: row['gsx$bookinformation']['$t'],
      website: row['gsx$website']['$t'],
      facebook: row['gsx$facebook']['$t'],
      instagram: row['gsx$instagram']['$t'],
      twitter: row['gsx$twitter']['$t'],
      profileImage: row['gsx$profileimage']['$t'],
      questions: [
        { name: "What's your favorite thing about meeting with readers?", value: row['gsx$whatsyourfavoritethingaboutmeetingwithreaders']['$t'] },
        { name: "What is the weirdest question you've ever gotten from a reader?", value: row['gsx$whatistheweirdestquestionyouveevergottenfromareader']['$t'] },
        { name: "What are you most looking forward to about the Collingswood Book Festival?", value: row['gsx$whatareyoumostlookingforwardtoaboutthecollingswoodbookfestivalifyouvebeenherebefore']['$t'] },
      ],
    };
  }
};
