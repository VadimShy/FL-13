const baseUrl = 'http://localhost:3000';
const appStatus = {isLoading: false, hasError: false, errorMessage: ''};

const appProgressBar = document.getElementById('progress-bar');

const appList = document.getElementById('list');
const submitButton = document.querySelector('button');

const inputNameValue = document.getElementById('name');
const inputFullNameValue = document.getElementById('fullName');
const timeOutDelay400 = 400;
const timeOutDelay600 = 600;
const timeOutDelay100 = 100;
const readyStateCode = 4;
const serverResponseCode = 204;

let DATA = [];


const getRequest = (url) => {
  let XDomainRequest;
  const XHR = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
  const xhr = new XHR();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    DATA = JSON.parse(this.responseText);
    render(DATA);
  }
  xhr.onerror = function () {
    alert('Ошибка ' + this.status);
  }
  xhr.send();
}

const render = (users) => {
  appList.innerHTML = ``;

  users.forEach(user => {
    const { id, name, username } = user;

    const listItem = document.createElement('li');
    listItem.classList.add('user-item');

    const deleteButton = document.createElement('button');
    const updateButton = document.createElement('button');


    const editInputFullName = document.createElement('input');
    editInputFullName.setAttribute('id', `${id}-username`);
    const editInputName = document.createElement('input');
    editInputName.setAttribute('id', `${id}-name`);

    deleteButton.addEventListener('click', () => deleteRequest(`${baseUrl}/users`, id));

    deleteButton.innerText = `Delete`;
    updateButton.innerText = `Update`;

    editInputFullName.value = name;
    editInputName.value = username;

    updateButton.addEventListener('click', () => {
      const editableItemNameValue = document.getElementById(`${id}-name`);
      const editableItemFullNameValue = document.getElementById(`${id}-username`);

      console.log(editableItemNameValue.value, editableItemFullNameValue.value, 'INPUUUUT');

      updateRequest(`${baseUrl}/users`, 
      {username: editableItemNameValue.value, name: editableItemFullNameValue.value}, id);

    });

    listItem.innerText = `${id}`;

    listItem.appendChild(editInputFullName);
    listItem.appendChild(editInputName);

    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);
    appList.appendChild(listItem);
  });

}

const timeOutLoader = (func, delay) => setTimeout(() => func(), delay);

const postRequest = (yourUrl, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', yourUrl, true);

  xhr.upload.onprogress = () => {
    appStatus.isLoading = true;

    timeOutLoader(() => {
      appProgressBar.innerHTML = `<p>LOADING ...</p>`;
      appProgressBar.classList.remove('progress-bar');
      appProgressBar.classList.add('progress-bar-loading');
    }, 0);

  }

  xhr.upload.onload = () => {
    appStatus.isLoading = false

    timeOutLoader(() => {
      appProgressBar.innerHTML = ``;
      appProgressBar.classList.remove('progress-bar-loading');
      appProgressBar.classList.add('progress-bar');
      getRequest(`${baseUrl}/users`);
      render(DATA);
    }, timeOutDelay400);
  }

  xhr.upload.onerror = () => appStatus.hasError;

  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
}


const updateRequest = (yourUrl, data, id) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${yourUrl}/${id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');


  xhr.upload.onprogress = () => {
    appStatus.isLoading = true;

    timeOutLoader(() => {
      appProgressBar.innerHTML = `<p>LOADING ...</p>`;
      appProgressBar.classList.remove('progress-bar');
      appProgressBar.classList.add('progress-bar-loading');
    }, 0);

  }

  xhr.upload.onload = () => {
    appStatus.isLoading = false;

    timeOutLoader(() => {
      appProgressBar.innerHTML = ``;
      appProgressBar.classList.remove('progress-bar-loading');
      appProgressBar.classList.add('progress-bar');
      getRequest(`${baseUrl}/users`);
    }, timeOutDelay400);
  }

  xhr.send(JSON.stringify(data));
}

const deleteRequest = (yourUrl, id) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${yourUrl}/${id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('authorization', 'admin');

  xhr.onload = function () {
    console.log(xhr, 'STATUS ---');

    if (xhr.readyState === readyStateCode && xhr.status === serverResponseCode) {
      timeOutLoader(() => {
        appProgressBar.innerHTML = `<p>LOADING ...</p>`;
        appProgressBar.classList.remove('progress-bar');
        appProgressBar.classList.add('progress-bar-loading');
      }, 0);

      timeOutLoader(() => {
        appProgressBar.innerHTML = ``;
        appProgressBar.classList.remove('progress-bar-loading');
        appProgressBar.classList.add('progress-bar');
        getRequest(`${baseUrl}/users`);
        render(DATA);
      }, timeOutDelay600);
    } else {
      appStatus.hasError = true;
      console.log('ERROR');
    }
  }
  xhr.send();
}

timeOutLoader(() => {
  appProgressBar.innerHTML = `<p>LOADING ...</p>`;
  appProgressBar.classList.remove('progress-bar');
  appProgressBar.classList.add('progress-bar-loading');
}, 0);

timeOutLoader(() => {
  appProgressBar.innerHTML = ``;
  appProgressBar.classList.remove('progress-bar-loading');
  appProgressBar.classList.add('progress-bar');
  getRequest(`${baseUrl}/users`);
  render(DATA);
}, timeOutDelay100);

submitButton.addEventListener('click', () => {
  postRequest(`${baseUrl}/users`,{
    username: inputNameValue.value,
    name: inputFullNameValue.value
  });
});

render(DATA);