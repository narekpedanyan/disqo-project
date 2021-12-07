import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Gist from "./gist";

const Gists = ({
  data = []
}) => {
  return (
    <div className="gists">
      {
        data.map((item, index) => {
          const { files } = item;
          return (
            <div key={index} className="each-gist">
              {
                Object.keys(files).map((fileName, index) => {
                  const file = files[fileName];
                  const { raw_url: rawUrl } = file;
                  return (
                    <Gist
                      key={index}
                      rawUrl={rawUrl}
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
  data: PropTypes.array
};

export default Gists;

