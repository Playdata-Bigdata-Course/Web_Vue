<template>
  <dl>
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
    <br>
    Playdata.vue인 부모에서 제공해준 데이터 : {{message}}
  </dl>
</template>

<script>
export default {
    name : 'ListView',
    props : {message:String}
}
</script>