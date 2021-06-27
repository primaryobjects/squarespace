// noprotect
const Author = props => {
  const author = props.data;
  return (
    <div className="list-item" data-is-card-enabled="false">
      <div style={{float:'left', maxWidth: '300px'}}>
    
        <div className="list-item-content" style={{marginRight: '20px'}}>
        <div className="list-item-content__text-wrapper">
          <h2 className="list-item-content__title">
            {author.name}
          </h2>
        </div>
    
        <div className="list-item-media" style={{marginBottom: '6%'}}>
          <div className="list-item-media-inner" data-aspect-ratio="4:3" data-animation-role="image">
            <img data-image-focal-point="NaN,NaN" data-src={author.profileImage} data-image={author.profileImage} data-image-dimensions="5000x3333" className="list-image" data-load="false" data-mode="cover" data-use-advanced-positioning="true" data-parent-ratio="1.3" data-image-resolution="300w" src={author.profileImage} data-loaded="true" style={{width: '200px', objectFit: 'cover'}}></img>
          </div>
        </div>

        <div className="list-item-content__text-wrapper">
          <p className="list-item-content__title">
            {author.biography}
          </p>
        </div>
        </div>
   
      <div className="list-item-media" style={{marginBottom: '6%'}}>
        <div className="list-item-media-inner" data-aspect-ratio="4:3" data-animation-role="image">
          <img data-image-focal-point="NaN,NaN" data-src={author.bookImage} data-image={author.bookImage} data-image-dimensions="5000x3333" className="list-image" data-load="false" data-mode="cover" data-use-advanced-positioning="true" data-parent-ratio="1.3" data-image-resolution="300w" src={author.bookImage} data-loaded="true" style={{width: '200px', objectFit: 'cover'}}></img>
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
      name: row['gsx$author']['$t'],
      biography: row['gsx$biography']['$t'],
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
