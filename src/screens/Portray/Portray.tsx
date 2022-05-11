import React from 'react';
import {
  Icon,
  LinearGradient,
  Text,
  TouchableOpacity,
  View,
  moment,
  Calendar,
} from '@components';
import {DateData, DayProps, Direction} from '@types';
import {useCallback, useMemo, useState} from '@hooks';
import styles from './styles';
import {colors} from '@constants';
import {InfoBlock} from './components';
import {LocaleConfig} from '@services';

type TPortrayProps = {};

const Portray: React.FC<TPortrayProps> = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<
    null | DateData['dateString']
  >(null);
  const [selectedEndDate, setSelectedEndDate] = useState<
    null | DateData['dateString']
  >(null);

  const isBetweenDate = useCallback(
    (date: DateData['dateString']) => {
      if (selectedStartDate && selectedEndDate) {
        return (
          (date > selectedStartDate && date < selectedEndDate) ||
          (date < selectedStartDate && date > selectedEndDate)
        );
      }
    },
    [selectedEndDate, selectedStartDate],
  );

  const CalendarHeader = useCallback((date: Date) => {
    return (
      <View style={styles.headerCalendarContent}>
        <Text style={styles.headerMonth}>
          {moment(date.toISOString()).format('MMMM')}
        </Text>
        <Text>{moment(date.toISOString()).format('yyyy')}</Text>
      </View>
    );
  }, []);

  const onPress = useCallback(
    (date: DateData['dateString']) => () => {
      if (!selectedStartDate) {
        setSelectedStartDate(date);
      } else if (selectedStartDate === date) {
        setSelectedStartDate(null);
      } else if (selectedEndDate === date) {
        setSelectedEndDate(null);
      } else {
        setSelectedEndDate(date);
      }
    },
    [selectedStartDate, selectedEndDate],
  );

  const DayComonent: React.FC<DayProps & {date?: DateData}> = useCallback(
    ({date, state}) => {
      const cellStyle = useMemo(
        () => [
          styles.defaultDateCell,
          selectedStartDate &&
          selectedEndDate &&
          isBetweenDate(date!.dateString)
            ? styles.betweenDateCell
            : {},
          selectedStartDate &&
          selectedEndDate &&
          isBetweenDate(date!.dateString) &&
          moment(date!.dateString).format('d') === '6'
            ? styles.rightBetweenDateCell
            : {},
          selectedStartDate &&
          selectedEndDate &&
          isBetweenDate(date!.dateString) &&
          moment(date!.dateString).format('d') === '0'
            ? styles.leftBetweenDateCell
            : {},
          date!.dateString === moment().format('YYYY-MM-DD')
            ? styles.currentDateCell
            : {},
        ],
        [date, selectedEndDate, selectedStartDate],
      );

      const cellTextStyle = useMemo(
        () => [
          styles.textDateCell,
          {
            color:
              selectedStartDate === date!.dateString ||
              selectedEndDate === date!.dateString
                ? 'white'
                : state === 'disabled'
                ? 'gray'
                : 'black',
          },
        ],
        [date, selectedEndDate, selectedStartDate],
      );
      return (
        <TouchableOpacity style={cellStyle} onPress={onPress(date!.dateString)}>
          {selectedStartDate === date!.dateString ||
          selectedEndDate === date!.dateString ? (
            <LinearGradient
              colors={colors.GRADIENT}
              style={styles.gradientCell}
            />
          ) : null}
          <Text style={cellTextStyle}>{date!.day}</Text>
        </TouchableOpacity>
      );
    },
    [selectedStartDate, selectedEndDate],
  );

  const RenderArrow = useCallback((direction: Direction) => {
    if (direction === 'left') {
      return (
        <View style={styles.arrowLeftStyle}>
          <Icon name="Chevron-Left" size={24} color="#000" />
        </View>
      );
    } else {
      return (
        <View style={styles.arrowRightStyle}>
          <Icon name="Chevron-Right" size={24} color="#000" />
        </View>
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        renderHeader={CalendarHeader}
        theme={{
          weekVerticalMargin: 0,
        }}
        headerStyle={styles.headerCalendar}
        dayComponent={DayComonent}
        renderArrow={RenderArrow}
      />
      {selectedEndDate && selectedStartDate ? (
        <InfoBlock firstDate={selectedEndDate} secondDate={selectedStartDate} />
      ) : null}
    </View>
  );
};

export default Portray;
