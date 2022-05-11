import {Text, View, moment} from '@components';
import {DateData} from '@types';
import React from 'react';
import styles from './styles';
type TInfoBlockProps = {
  firstDate: DateData['dateString'];
  secondDate: DateData['dateString'];
};
const InfoBlock: React.FC<TInfoBlockProps> = ({firstDate, secondDate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chosen dates:</Text>
      <Text style={styles.text}>
        {firstDate < secondDate
          ? moment(firstDate).format('DD-MM-YYYY')
          : moment(secondDate).format('DD-MM-YYYY')}
        {' - '}
        {firstDate > secondDate
          ? moment(firstDate).format('DD-MM-YYYY')
          : moment(secondDate).format('DD-MM-YYYY')}
      </Text>
    </View>
  );
};

export default InfoBlock;
