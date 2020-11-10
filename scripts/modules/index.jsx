import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'components/router';
import { createGlobalStyle } from 'styled-components';

import Layout from 'components/layout';

import { useDataFetcher } from 'hooks';

import { getUsers, getAlbumsAll, getPhotosAll } from 'sources/gallery';

import UsersPage from './Users';
import AlbumPage from './Albums';
import PhotoPage from './Photos';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: #f5f5f5;
  },
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const AppModules = () => {
  const [dataUsers, loadingUsers, errorUsers] = useDataFetcher(getUsers);
  const [dataAlbums, loadingAlbums, errorAlbums] = useDataFetcher(getAlbumsAll);
  const [dataPhotos, loadingPhotos, errorPhotos] = useDataFetcher(getPhotosAll);

  return (
    <HashRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route
            path="/users"
            render={() => {
              return (
                <UsersPage
                  loadingUsers={loadingUsers}
                  errorUsers={errorUsers}
                  dataUsers={dataUsers}
                />
              );
            }}
          />
          <Route
            path="/album/:id"
            render={() => {
              return (
                <AlbumPage
                  loadingAlbums={loadingAlbums}
                  errorAlbums={errorAlbums}
                  dataAlbums={dataAlbums}
                  dataPhotos={dataPhotos}
                />
              );
            }}
          />
          <Route
            path="/photo/:id"
            render={() => {
              return (
                <PhotoPage
                  loadingPhotos={loadingPhotos}
                  errorPhotos={errorPhotos}
                  dataPhotos={dataPhotos}
                />
              );
            }}
          />
          <Route path="*" render={() => <Redirect to="/users" />} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

render(<AppModules />, document.getElementById('root'));
