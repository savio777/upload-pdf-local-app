import React from 'react';

import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';
import Pdf from 'react-native-pdf';

interface Props {
  uri?: string;
  title?: string;
  close(): void;
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flexDirection: 'row', width: '100%', padding: 10},
  leftHeader: {flex: 1},
  centerHeader: {flex: 1, alignItems: 'center', minWidth: '70%'},
  rightHeader: {flex: 1, alignItems: 'flex-end'},
});

const PdfViewer: React.FC<Props> = ({uri, close, title}) =>
  uri ? (
    <Modal
      style={styles.container}
      visible={!!uri}
      onRequestClose={close}
      presentationStyle="fullScreen">
      <View style={styles.header}>
        <View style={styles.leftHeader} />
        <View style={styles.centerHeader}>
          <Text>{title}</Text>
        </View>
        <TouchableOpacity style={styles.rightHeader} onPress={close}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
      <Pdf source={{uri}} style={styles.container} />
    </Modal>
  ) : null;

export default PdfViewer;
