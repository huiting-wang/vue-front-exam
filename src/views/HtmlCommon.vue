<template>
  <div class="home-common-page">
    <div class="markdown-body">
      <HtmlCommonMd />
    </div>
  </div>
</template>

<script>
import HtmlCommonMd from '@/markdown/html-common.md';

export default {
  name: 'HtmlCommon',
  components: { HtmlCommonMd },
};
</script>
