<template lang="pug">
AuthCompUI(v-show="auth == false")
div(v-show="auth == true")
  MainNavbarUI
  router-view
</template>
<script>
import AuthCompUI from "@/components/UI/AuthUI.vue";
export default {
  data() {
    return {
      auth: false,
    };
  },
  components: {
    AuthCompUI,
  },
};
</script>
<style lang="scss">
$bgGradient: linear-gradient(to right bottom, #74A7F4 3.31%, #BD5DAE 94.52%);
#app{
  font-family: 'Cera Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
@font-face{
    font-family: 'Cera Pro Italic';
    src: local('Cera Pro Italic'), local('CeraPro-Italic'),
        url('@/assets/fonts/CeraPro-Italic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Italic.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}
@font-face{
    font-family: 'Cera Pro';
    src: local('Cera Pro Regular'), local('CeraPro-Regular'),
        url('@/assets/fonts/CeraPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Regular.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face{
    font-family: 'Cera Pro Black Italic';
    src: local('Cera Pro Black Italic'), local('CeraPro-BlackItalic'),
        url('@/assets/fonts/CeraPro-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-BlackItalic.woff') format('woff'),
        url('@/assets/fonts/CeraPro-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}
@font-face{
    font-family: 'Cera Pro Light';
    src: local('Cera Pro Light'), local('CeraPro-Light'),
        url('@/assets/fonts/CeraPro-Light.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Light.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}
@font-face{
    font-family: 'Cera Pro Bold Italic';
    src: local('Cera Pro Bold Italic'), local('CeraPro-BoldItalic'),
        url('@/assets/fonts/CeraPro-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-BoldItalic.woff') format('woff'),
        url('@/assets/fonts/CeraPro-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face{
    font-family: 'Cera Pro Black';
    src: local('Cera Pro Black'), local('CeraPro-Black'),
        url('@/assets/fonts/CeraPro-Black.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Black.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}
@font-face{
    font-family: 'Cera Pro Medium';
    src: local('Cera Pro Medium'), local('CeraPro-Medium'),
        url('@/assets/fonts/CeraPro-Medium.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Medium.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
@font-face{
    font-family: 'Cera Pro Bold';
    src: local('Cera Pro Bold'), local('CeraPro-Bold'),
        url('@/assets/fonts/CeraPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Bold.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}
@font-face{
    font-family: 'Cera Pro Thin';
    src: local('Cera Pro Thin'), local('CeraPro-Thin'),
        url('@/assets/fonts/CeraPro-Thin.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-Thin.woff') format('woff'),
        url('@/assets/fonts/CeraPro-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}
@font-face{
    font-family: 'Cera Pro Medium Italic';
    src: local('Cera Pro Medium Italic'), local('CeraPro-MediumItalic'),
        url('@/assets/fonts/CeraPro-MediumItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-MediumItalic.woff') format('woff'),
        url('@/assets/fonts/CeraPro-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}
@font-face{
    font-family: 'Cera Pro Light Italic';
    src: local('Cera Pro Light Italic'), local('CeraPro-LightItalic'),
        url('@/assets/fonts/CeraPro-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-LightItalic.woff') format('woff'),
        url('@/assets/fonts/CeraPro-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}
@font-face{
    font-family: 'Cera Pro Thin Italic';
    src: local('Cera Pro Thin Italic'), local('CeraPro-ThinItalic'),
        url('@/assets/fonts/CeraPro-ThinItalic.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/CeraPro-ThinItalic.woff') format('woff'),
        url('@/assets/fonts/CeraPro-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
}

html {
  min-width: 100vw;
  min-height: 100vh;
  background: $bgGradient;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>
