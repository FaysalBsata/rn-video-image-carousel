# rn-video-image-carousel
A react native library that provides a carousel containing both images and videos


to install:
yarn add rn-video-image-carousel
npm install rn-video-image-carousel

you can use it as follows:

import ImageCarousel from "rn-video-image-carousel";
    <ImageCarousel
      data={[
        {
          mediaUrl:
            yourUrl,
          image: true,
        },
        {
          mediaUrl:
            yourUrl,
          image: false,
        },
      ]}
    />  