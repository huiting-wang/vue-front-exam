<template>
  <div class="html-basic-page">
    <div class="markdown-body">
      <HtmlBasicMd />
    </div>
  </div>
</template>

<script>
import HtmlBasicMd from '@/markdown/html-basic.md';

export default {
  name: 'HtmlBasic',
  components: { HtmlBasicMd },
};
</script>
