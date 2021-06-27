// noprotect
const Author = props => {
  const author = props.data;
  return (
<div className="col sqs-col-6 span-6" id="yui_3_17_2_1_1624821117171_494">
    <div className="row sqs-row" id="yui_3_17_2_1_1624821117171_493">
      <div className="col sqs-col-5 span-5" id="yui_3_17_2_1_1624821117171_492">
        <div className="sqs-block image-block sqs-block-image sqs-col-3 span-3 float float-right sqs-text-ready" data-block-type="5" id="block-yui_3_17_2_1_1601414526373_40613">
          <div className="sqs-block-content" id="yui_3_17_2_1_1624821117171_491">
            <div className="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1624821117171_490">
              <figure className="sqs-block-image-figure intrinsic" style={{maxWidth:'2500px'}} id="yui_3_17_2_1_1624821117171_489">
                <div style={{paddingBottom: '85%', overflow: 'hidden'}} className="image-block-wrapper has-aspect-ratio" data-animation-role="image" id="yui_3_17_2_1_1624821117171_488">
                  <noscript><img src={author.profileImage} /></noscript><img className="thumb-image loaded" data-src={author.profileImage} data-image={author.profileImage} data-image-dimensions="2500x2125" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5f73a61dbffe5632cc4fe3ad" data-type="image" style={{left: '-0.0625782%', top: '0%', width: '100.125%', height: '100%', position: 'absolute'}} data-image-resolution="300w" src={author.profileImage}></img>
                </div>
              </figure>
            </div>
          </div>
          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-ddc2a533e837e937e983">
            <div className="sqs-block-content">
              <h4 style={{whiteSpace:'pre-wrap'}}>{author.name}</h4>
              <p style={{whiteSpace:'pre-wrap'}}>{author.biography}</p>
              <p style={{whiteSpace:'pre-wrap'}}>
                <strong>Connect with {author.name}:</strong>
              </p>
              <p style={{whiteSpace:'pre-wrap'}}>
                <a href="https://www.100thingstodoinphiladelphia.com/" target="_blank">https://www.100thingstodoinphiladelphia.com</a>
              </p>
              <p style={{whiteSpace:'pre-wrap'}}><strong>Buy the Book:</strong></p>
              <p style={{whiteSpace:'pre-wrap'}}><a href="https://inkwoodnj.handseller.com/home/bookdetailsin/1681062720" target="_blank">100 Things to Do in Philadelphia Before You Die (2nd edition)</a></p>
            </div>
          </div>
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

  return (
    <div id="author-collection">
      <div id="custom-list" className="user-items-list-item-container user-items-list-simple" style={{ gridGap: '100px 100px' }} data-controller="UserItemsListSimple" data-num-columns="3" data-content-order="media-first">
        { data && data.length ? data.map(item => {
          return (
            <Inner data={item} />
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
      date: '6/27/2021',
      name: row['gsx$author']['$t'],
      profileImage: row['gsx$profileimage']['$t'],
      bookImage: row['gsx$bookimage']['$t'],
    };
  }
};

$(function() {
  // Render a collection of authors using a specific spreadsheet parser and inner renderer.
  ReactDOM.render(<AuthorCollection 
                    manager={adultAuthorManager}
                  />, document.getElementById('root'));
});
