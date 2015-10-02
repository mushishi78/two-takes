import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './templates/app.jsx';
import './css';

export default function(path, props, callback) {
  callback('<!doctype html>' + renderToString(<App path={path} />));
}
