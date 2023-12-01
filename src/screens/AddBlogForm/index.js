import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,Image} from "react-native";
import { AddPhoto, Send2, Back} from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../../themes";

const AddBlogForm = () => {
  const dataCategory = [
    { id: 1, name: "Food" },
    { id: 2, name: "Sports" },
    { id: 3, name: "Exercise" },
    { id: 4, name: "Fashion" },
    { id: 5, name: "Health" },
    { id: 6, name: "Lifestyle" },
    { id: 7, name: "Music" },
    { id: 8, name: "Automotive" },
  ];
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: {},
    totalLikes: 0,
    totalComments: 0,
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const handleArrowLeftPress = () => {
    navigation.goBack(); // Use goBack to navigate back
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeftPress}>
          <Back color={colors.white()} variant="Linear" size={28} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={[styles.title, { color: 'white', fontSize: 20 }]}>Update Status</Text>
        </View>
        <TouchableOpacity onPress={handleArrowLeftPress}>
          <Send2 color={colors.white()} variant="Linear" size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
          <TextInput
            placeholder="What's on your mind?"
            value={blogData.content}
            onChangeText={(text) => handleChange("content", text)}
            placeholderTextColor={colors.white()}
            multiline
            style={textInput.content}
          />
        </View>
        
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontType["Pjs-Regular"],
              color: 'white',
            }}>Category</Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === blogData.category.id
                  ? colors.white()
                  : colors.white(0.08);
              const color =
                item.id === blogData.category.id
                  ? colors.white()
                  : colors.white();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange("category", { id: item.id, name: item.name })
                  }
                  style={[category.item, { backgroundColor: bgColor }]}
                >
                  <Text style={[category.name, { color: color }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType["Pjs-Bold"],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.blue(),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.white(),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPhotoButtonText: {
    fontSize: 16,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.grey(0.6),
    marginLeft: 10,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "solid",
    borderWidth: 0.2,
    borderRadius: 5,
    height: "auto",
    padding: 10,
    borderColor: colors.white(),
  },
  content: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType["Pjs-Medium"],
  },
}
);
export default AddBlogForm;