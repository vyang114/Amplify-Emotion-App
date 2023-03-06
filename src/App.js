import logo from './logo.svg';
import './App.css';

import ProductDetailCollection from './ui-components/ProductDetailCollection';
import { DataStore } from '@aws-amplify/datastore';
import { Person } from "./models";
import CreatePerson from './CreatePerson';
import ReactPaginate from 'react-paginate';

import { useEffect, useState } from 'react';
import { Storage } from "@aws-amplify/storage";

const blog = [
  {
     id: 1,
     title:
        'How to Internationalize a React Application Using i18next and Hygraph',
     excert:
        'In this post, we will take a deep dive into how to internationalize a React Application using i18next and Hygraph',
     postUrl: 'https://hygraph.com/blog/react-internationalization',
     cover: {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
     },
     datePublished: '2020-01-01',
     author: {
        profilePicture: {
           url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
     },
  },
  {
    id: 2,
    title:
       'How to Internationalize a React Application Using i18next and Hygraph',
    excert:
       'In this post, we will take a deep dive into how to internationalize a React Application using i18next and Hygraph',
    postUrl: 'https://hygraph.com/blog/react-internationalization',
    cover: {
       url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    datePublished: '2020-01-01',
    author: {
       profilePicture: {
          url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
       },
    },
 },
 {
  id: 3,
  title:
     'How to Internationalize a React Application Using i18next and Hygraph',
  excert:
     'In this post, we will take a deep dive into how to internationalize a React Application using i18next and Hygraph',
  postUrl: 'https://hygraph.com/blog/react-internationalization',
  cover: {
     url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  datePublished: '2020-01-01',
  author: {
     profilePicture: {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
     },
  },
},
{
  id: 4,
  title:
     'How to Internationalize a React Application Using i18next and Hygraph',
  excert:
     'In this post, we will take a deep dive into how to internationalize a React Application using i18next and Hygraph',
  postUrl: 'https://hygraph.com/blog/react-internationalization',
  cover: {
     url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  datePublished: '2020-01-01',
  author: {
     profilePicture: {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
     },
  },
},
];

function App() {

  const [persons,setPerson] = useState([<CreatePerson key={0} />]);

  let handleAddPerson = (e) => {
      e.preventDefault()
      setPerson([...persons,<CreatePerson key={persons.length} />]);
  }
  
  const [posts, setPosts] = useState([])
  const [images, setImages] = useState([])

  // const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);

  const imageURL = []

  useEffect(() => {

    function processStorageList(response) {

      let files = [];
      let folders = new Set();
      response.results.forEach(res => {
        if (res.size) {
          let title = res.key
          .split('/').pop()
          res.title = title
          // console.log(res)
          files.push(res);
          // sometimes files declare a folder with a / within then
          let possibleFolder = res.key
            .split('/')
            .slice(0, -1)
            .join('/');
          if (possibleFolder) folders.add(possibleFolder);
        } else {
          folders.add(res.key);
        }
      });
      return { files, folders };
    }

    const listFiles = async () => {
      // const file = Storage.list('Anger/') // for listing ALL files without prefix, pass '' instead
      //   // .then((result) => console.log(result))
      //   // .catch((err) => console.log(err));
      // console.log(file.results)

      const file = await Storage.list('') // for listing ALL files without prefix, pass '' instead
      setPosts(processStorageList(file).files)
    };

    listFiles()

  }, [])

  
  useEffect(() => {

    const getImageURL = async () => {
      console.log("Before loop");

      for(let index = 0; index < posts.length; index++) {
        const image = await Storage.get(posts[index].key, {
          level: "public"
        });
        // console.log(<img src={`${image}`} alt="image not found" width="500" height="500"/>)
        // imageURL.push(<div><img src={`${image}`} alt="image not found" width="500" height="500"/><h3>{posts[index].title}</h3></div>)

        let data = {
          key: posts[index].key,
          title: posts[index].title,
          source: image
        }
        
        imageURL.push(data)
        // setImages(imageURL)
        // console.log("In loop")
      }
      setImages(imageURL)
      console.log("After loop")
      // console.log(imageURL)
    };

    getImageURL()

  }, [posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

  useEffect(() => {
    // setBlogPosts(blog)
    const querySubmission = async () => {
      const file = await DataStore.query(Person, p => p.emotion.eq("Annoyance")) // for listing ALL files without prefix, pass '' instead
      console.log(currentPosts)
    };

    querySubmission()
    
  }, []);

  // const displaySubmission = currentTitle => {
  //   const querySubmission = async () => {
  //     const file = await DataStore.query(Person, p => p.emotion.gt("Annoyance")) // for listing ALL files without prefix, pass '' instead
  //     console.log(file)
  //   };
  // }

  return (
      <div className="container">
        <div className="blog-content-section">
          <div className="container-grid">
            <div className='col-1 '>
              <div className="blog-container">
                  {currentPosts.map((currentPost) => (
                    <div className="blog-post" key={currentPost.key}>
                      <img className="cover-img" src={currentPost.source} alt="image not found" />
                      <h2 className="title">{currentPost.title}</h2>
                    </div>
                  ))}
              </div>
            </div>
          
            <div className='col-2'>
              {persons}
            </div>
          </div>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(images.length / postsPerPage)}
            previousLabel={'Prev'}
            nextLabel={'Next'}
            containerClassName={'pagination'}
            pageLinkClassName={'page-number'}
            previousLinkClassName={'page-number'}
            nextLinkClassName={'page-number'}
            activeLinkClassName={'active'}
            />
        </div>
      </div>
    
 );
 
  //   return (    
  //   <div className="rowC">
      
  //     <div>
  //       <h5>Hello</h5>
  //       {images}
  //       <Paginate
  //         nPages = { nPages }
  //         currentPage = { currentPage } 
  //         setCurrentPage = { setCurrentPage }
  //     />
  //     </div>
  //   {/* <div>
  //     <img src="https://drive.google.com/thumbnail?id=1ydY7hLjmKMfY-DOkgBguBNCDZpt5QmrD" alt="image" />
  //   </div> */}
  //   {/* <div>
  //     {posts.map((item) => {
  //       return (
  //         <div>
  //           <h2>{item.key}</h2>
  //           <p>{item.etag}</p>
  //           <img src={`${item.key}`} alt="image not found" width="50" height="50" />
  //         </div>
  //       )
  //     })}
  //   </div> */}
  //    {persons}
  //   <button onClick={handleAddPerson}>ADD PERSON</button>
  //     {/* <CreatePerson /> */}
  //     {/* <button onClick={clickMe}>Click Me</button> */}
  //   </div>

  // );
}

export default App;
