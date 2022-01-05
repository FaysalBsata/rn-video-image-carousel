import React from "react";
import { View, Text, Image, FlatList, Dimensions } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const VideoImageCarousel = (props) => {
  const data = props?.data;
  const renderMedia = (itemData) => {
    if (itemData.item.image) {
      return (
        <View>
          <Image
            style={{
              width: props.imageWidth || Dimensions.get("window").width,
              height: props.imageHeight || 300,
            }}
            source={{
              uri: itemData.item.mediaUrl,
            }}
          />
        </View>
      );
    } else {
      return (
        <Video
          source={{ uri: itemData.item.mediaUrl }}
          style={{
            width: props.videoWidth || Dimensions.get("window").width,
            height: props.videoHeight || 300,
          }}
          {...props.videoOptions}
          shouldPlay
          isMuted
        />
      );
    }
  };
  return (
    <View style={{ marginVertical: 10, ...props.containerStyle }}>
      {props.data.length > 0 ? (
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          {...props.flatlistProps}
          keyExtractor={(item, index) => index}
          pagingEnabled
          renderItem={renderMedia}
        />
      ) : (
        <Text
          style={{
            alignSelf: "center",
            ...props.fallBackTextStyle,
          }}
        >
          {props.fallBackText || "No Media Found!"}
        </Text>
      )}
    </View>
  );
};

export default VideoImageCarousel;
