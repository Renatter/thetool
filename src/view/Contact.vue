<template>
  <div class="">
    <h1 class="text-[35px] font-bold my-[20px]">{{ $t("header.title") }}</h1>
    <div class="map-container flex gap-[25px]">
      <iframe
        class="w-[600px] h-[400px]"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaa708822e7d36cc84c84b11bec7c558375ba62d3d0a243d019652b982624a375&amp;source=constructor"
      ></iframe>
      <div>
        <div class="mt-[15px] text-[20px]">
          <p class="font-bold">Телефон</p>
          <p>87545324020</p>
        </div>
        <div class="mt-[15px] text-[20px]">
          <p class="font-bold">{{ $t("header.addres") }}</p>
          <p>Железнодорожная ул., 77/1, г. Аксай</p>
        </div>
        <div>
          <p class="font-bold">{{ $t("header.time") }}</p>
          <p>8:00 -18:00</p>
        </div>
        <div class="mt-[15px] text-[20px]">
          <p class="font-bold">email</p>
          <p>attabke@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
