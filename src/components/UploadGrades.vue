<script setup>
import { s3 } from '../integrations/aws';
</script>

<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="onFileChange()" />
      </label>
      <button :class="{ 'btn-active': this.file && !fileError }" @click="uploadFile()">Upload</button>
      <p class="error-message" :class="{ 'active': fileError }">File type
        unsupported!</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['files'],
  data() {
    return {
      file: undefined,
    }
  },
  methods: {
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    uploadFile() {
      if (!this.file) return;

      const reader = new FileReader();
      console.log('1');
      reader.onload = function (event) {
        console.log('2');
        const csvContent = event.target.result;

        const params = {
          Bucket: import.meta.env.VITE_AWS_BUCKET,
          Key: 'data.csv',
          // ContentType: this.file.type,
          Body: csvContent
        }

        s3.putObject(params, (err, data) => {
          console.log('3');
          console.log(err ? err : 'uploaded csv');
        })
      }

      reader.readAsText(this.file);

      // const params = {
      //   Bucket: import.meta.env.VITE_AWS_BUCKET,
      //   Key: this.file.name.replace(/\s/g, '-'),
      //   ContentType: this.file.type,
      //   Body: csvContent
      // }
      // console.log(params);
      // const url = s3.getSignedUrl('putObject', params);
      // console.log(url);

      // return axios
      //   .put(url, this.file, {
      //     headers: {
      //       'Content-Type': this.file.type,
      //     },
      //   })
      //   .then(result => {
      //     const bucketUrl = decodeURIComponent(result.request.responseURL).split(
      //       key
      //     )[0]
      //     result.key = key
      //     result.fullPath = bucketUrl + key
      //     this.file = undefined;
      //     return result
      //   })
      //   .catch(err => {
      //     // TODO: error handling
      //     this.file = undefined;
      //     console.log(err)
      //   })
    }
  },
  computed: {
    fileError() {
      return this.file && this.file.type !== 'text/csv'
    },
    emptyFile() {
      return !this.file
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  display: none;
}

.error-message.active {
  display: block !important;
}

button {
  display: none;
}

button.btn-active {
  display: inline-block !important;
}
</style>
