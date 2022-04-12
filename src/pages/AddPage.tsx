import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {useNavigate, useParams} from 'react-router-dom';
import {selectFirstToken, selectSecondToken} from '../redux/reducers/tokens';
import {setFirstToken, setSecondToken} from '../redux/actions';

import AddLiquidity from '../components/AddLiquidity';

const AddPage: React.FC = () => {
  const navigate = useNavigate();
  const {first, second} = useParams();
  const dispatch = useDispatch();

  let firstToken = useSelector(selectFirstToken);
  let secondToken = useSelector(selectSecondToken);

  if (firstToken !== first) {
    dispatch(setFirstToken(first || ''));
    firstToken = first;
  }
  if (secondToken !== second) {
    dispatch(setSecondToken(second || ''));
    secondToken = second;
  }

  return (
    <div className="AddPage">
      <AddLiquidity
        firstToken={firstToken || ''}
        secondToken={secondToken || ''}
        updateTokens={(firstToken, secondToken) =>
          (firstToken !== '' || secondToken !== '') &&
          navigate(`/add/${firstToken}/${secondToken}`)
        }
      />
    </div>
  );
};

interface ParamTypes {
  first: string | undefined;
  second: string | undefined;
}

export default AddPage;
