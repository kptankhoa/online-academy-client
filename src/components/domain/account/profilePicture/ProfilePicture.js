import React, {useContext, useEffect, useState} from 'react';
import FormData from 'form-data';
import {authContext} from 'provider/authProvider';
import {Button} from '@material-ui/core';
import {axiosInstanceDefault} from 'utils/auth';
import {UPDATE_USER_INFO} from 'Reducer/authReducer';
import FullScreenLoading from "../../../common/loading/FullScreenLoading";
import Avatar from '../../../common/avatar/Avatar';

const ProfilePicture = () => {
  const {authState, dispatch} = useContext(authContext);
  const [imgUrl, setImgUrl] = useState("");
  const [postUrl, setPostUrl] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authState.userInfo) {
      const info = authState.userInfo;
      setImgUrl(info.avatar);
      const userId = info._id;
      const urlByType = info.type === 'student' ? `/users/${userId}/avatar` : `lecturers/${userId}/avatar`;
      setPostUrl(urlByType);
    }
  }, [authState]);

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const clickHandler = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('avaImage', file);
    axiosInstanceDefault.post(postUrl, formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(r => {
        dispatch({
          type: UPDATE_USER_INFO,
          payload: {
            avatar: r.data.avatar
          }
        });
      }
    )
      .catch(err => console.log(err.response))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='d-inline-block'>
      {authState.userInfo && (
        <>
          <Avatar className="m-0 text-center" alt='Avatar' src={imgUrl} size={200} />
          <div className='text-center mt-2'>
            <Button
              variant='contained'
              component='label'
              className="text-capitalize"
            >
              Upload New Image
              <input
                type='file'
                accept='image/png, image/jpeg'
                hidden
                onChange={(e) => changeHandler(e)}
              />
            </Button>
            <div className='text-center mt-2'>
              <Button
                variant='contained'
                color='primary'
                onClick={clickHandler}
                className="text-capitalize"
              >
                Change Picture
              </Button>
            </div>
          </div>

          {loading && <FullScreenLoading/>}
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
