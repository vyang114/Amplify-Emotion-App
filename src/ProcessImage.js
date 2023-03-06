import { DataStore } from '@aws-amplify/datastore';
import { Storage } from "@aws-amplify/storage";

function processStorageList(response) {

  let files = [];
  let folders = new Set();
  response.results.forEach(res => {
    if (res.size) {
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

export default processStorageList;