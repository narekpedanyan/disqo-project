import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Gist from "./gist";
import {accessToken} from "../../constants/accessToken";

const Gists = ({
  data = [],
  reFetchGists
}) => {

  const removeGist = useCallback(
    (id) => {
      fetch(
        `https://api.github.com/gists/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${accessToken}`
          }
        }
      ).then(
        (res) => {
          const { status } = res;
          if (status === 204) {
            reFetchGists();
          }
        }
      ).catch((err) => {
        console.log('Err');
      })
    },
    []
  );

  return (
    <div className="gists">
      {
        (data || []).map((item, index) => {
          const { files, id } = item;
          return (
            <div key={index} className="each-gist">
              {
                Object.keys(files).map((fileName, index) => {
                  const file = files[fileName];
                  const { raw_url: rawUrl } = file;
                  return (
                    <Gist
                      removeGist={removeGist}
                      rawUrl={rawUrl}
                      key={index}
                      gistId={id}
                    />
                  );
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

Gists.propTypes = {
  reFetchGists: PropTypes.func,
  loading: PropTypes.string,
  data: PropTypes.array
};

export default Gists;

