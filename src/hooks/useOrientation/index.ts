import {Orientation} from '@components';
import {useCallback, useEffect, useState} from '@hooks';
import {orientation} from '@types';

const useOrientation = () => {
  const [orientation, setOrientation] = useState<orientation>();
  const setInitialOrientation = useCallback(
    (err: Error, orientation: orientation) => setOrientation(orientation),
    [],
  );

  useEffect(() => {
    Orientation.getOrientation(setInitialOrientation);
    Orientation.addOrientationListener(setOrientation);
    return () => Orientation.removeOrientationListener(setOrientation);
  }, []);

  return orientation;
};

export default useOrientation;
