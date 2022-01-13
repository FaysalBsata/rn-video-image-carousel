<p align="center">
  <img src="https://github.com/FaysalBsata/rn-video-image-carousel/blob/main/FaysalB-logos.jpeg?raw=true" width="170" />
</p>
<h1 align="center">React Native Video/Image Carousel Component</h1>

## Installation
> yarn add rn-video-image-carousel
or
> npm install --save rn-video-image-carousel

`USE:`
```jsx
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
```

<br/><br/>

## Properties
| Prop              | Type  | Description | Default |
|---|---|---|---|
| <b>data</b>       | Array | Array of objects containing media urls | `100%` |
| <b>imageWidth</b>       | Number | Image Width | `100%` |
| <b>imageHeight</b>      | Number | Image Height | `300` |
| <b>videoWidth</b>| Number | Video Width | `100%` |
| <b>videoHeight</b>  | Number | Video Height | `300` |
| <b>shouldPlay</b>    | Bool | Autoplay video | `true` |
| <b>isMuted</b>   | Bool | Muted Video | `true` |
| <b>mediaUrl</b>  | URL | Media URL | `` |
| <b>image</b>  | Bool | Image or Video | `true` |
| <b>...props</b>   | any   | more props       |      |
---



<br/><br/>