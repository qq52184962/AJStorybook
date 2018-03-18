<template>
  <div class="container">
    <div class="row">
      <div class="col-3 col-sm-2">
        <div class='thumbnail' :style="{background: thumbnailSrc}"></div>
      </div>
      <div class="col-9 col-sm-10">
        <component v-for='element in contents' :key="element.id" :is="element.type" v-bind="{text: element.text, name: element.name}"></component>
      </div>  
    </div>
  </div>
</template>

<script>
const thumbnailSrc = `url('https://res.cloudinary.com/cakeresume/image/upload/s--E1tluQp6--/c_fill,fl_png8,g_face,h_300,w_300/v1516022348/mk1ee5yiq2oi2xupdl9e.png')`;
const componentProps = {
  props: {
    text: {
      type: String,
      default: '', 
    },
    name: {
      type: String,
      default: ''
    }
  }
};
export default {
  name: 'b-component',
  props: {
    thumbnailSrc: {
      type: String,
      default: thumbnailSrc
    },
    contents: {
      type: Array,
      default: () => [
        {
          id: 0,
          type: 'html-h1',
          text: 'Chnagheng Liou'
        }, {
          id: 1,
          type: 'html-p',
          text: 'Mainly a c# and javascript developer, but also open ' +
                'and enthusiastic to all the new cutting edge technology. ' + 
                '- Being a full stack engineer for a while, .NET Core and ' + 
                'Node.JS as my backend skill set, React.JS as my frontend skill.'
        }, {
          id: 2,
          type: 'html-div',
          text: `<div class="social-links">
          <a href="https://twitter.com/" target="_blank" rel="nofollow noopener noreferrer"><i class="fa fa-twitter"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="nofollow noopener noreferrer"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.facebook.com/" target="_blank" rel="nofollow noopener noreferrer"><i class="fa fa-facebook-square"></i></a>
          <a href="https://github.com/" target="_blank" rel="nofollow noopener noreferrer"><i class="fa fa-github"></i></a>
        </div>`
        }, {
          id: 3,
          type: 'dyc',
          name: 'h1',
          text: 'dynamic component'
        }
      ]
    }
  },
  components: {
    'html-h1': Object.assign({}, componentProps, {template: `<h1 v-html='text'></h1>`}),
    'html-h2': Object.assign({}, componentProps, {template: `<h2 v-html='text'></h2>`}),
    'html-p': Object.assign({}, componentProps, {template: `<p v-html='text'></p>`}),
    'html-pre': Object.assign({}, componentProps, {template: `<pre v-html='text'></pre>`}),
    'html-div': Object.assign({}, componentProps, {template: `<div v-html='text'></div>`}),
    'dyc': Object.assign({}, componentProps, { 
      render: function (createElement) {
        return createElement(this.name, {
          domProps: { innerHTML: this.text }
        });
      }
    })
  },
  methods: {
    onClick (event) {
      event.preventDefault()
      this.showApp()
    }
  }
}
</script>

<style>
.thumbnail {
  border-radius: 50%;
  width: calc(10vw + 30px);
  height: calc(10vw + 30px);
  background-repeat: no-repeat!important;
  background-size: contain!important;
}

.social-links a i {
  font-size: 24px;
  color: #000;
}

.social-links a {
  text-decoration: none;
}

.social-links a::after {
  content: '    ';
  white-space: pre;
}
</style>

<style>
@import url('./global.css');
</style>
