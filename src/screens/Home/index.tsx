import React, {useCallback, useState} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'uuidv4';
import PdfViewer from '../../components/PdfViewer';

import {RootState} from '../../store';
import {addFile, IFiles} from '../../store/modules/Files';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-evenly'},
});

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files);

  const [pdfSelected, setPdfsetSelected] = useState<undefined | IFiles>();

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });

      dispatch(
        addFile({
          file: {
            id: uuid(),
            uri: response[0]?.uri,
            title: response[0]?.name,
          },
        }),
      );
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <PdfViewer
        uri={pdfSelected?.uri}
        title={pdfSelected?.title}
        close={() => setPdfsetSelected(undefined)}
      />

      <View style={styles.container}>
        <TouchableOpacity onPress={handleDocumentSelection}>
          <Text>Selecione um pdf</Text>
        </TouchableOpacity>

        <View>
          {files.map((file, index) => (
            <TouchableOpacity
              key={String(index)}
              onPress={() => setPdfsetSelected(file)}>
              <Text>{file.id}</Text>
              <Text>{file.title}</Text>
              <Text>{file.uri}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default Home;
