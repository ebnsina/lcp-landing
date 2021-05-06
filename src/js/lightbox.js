import Glightbox from 'glightbox';

Glightbox({
  plyr: {
    config: {
      ratio: '16:9',
      muted: false,
      hideControls: true,
      youtube: {
        noCookie: true,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
      },
      vimeo: {
        byline: false,
        portrait: false,
        title: false,
        speed: true,
        transparent: false,
      },
    },
  },
});
