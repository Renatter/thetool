<template>
  <div class="container text-white text-[20px]">
    <div class="Dewait text-[40px]">
      <router-link to="/Catalog">
        <h1 class="m-[30px]">DeWALT - Инструмент с настоящим характером</h1>
      </router-link>
    </div>
    <div class="stock">
      <router-link to="/Discount">
        <h1 class="m-[16px]">Акции</h1>
      </router-link>
    </div>
    <div class="New">
      <router-link to="/New">
        <h1 class="m-[16px]">Новое поступление</h1>
      </router-link>
    </div>
    <div class="stock2">
      <router-link to="/Hit">
        <h1 class="m-[16px]">Хиты сезона</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: 488px;
  gap: 20px 19px;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  grid-template-areas: "Dewait stock New" "Dewait stock stock2";
}

.Dewait {
  background-image: url("../assets/Rectangle 1328.png");
  position: relative;
  grid-area: Dewait;
}

.stock {
  background-image: url("../assets/Rectangle 1329.png");
  position: relative;
  grid-area: stock;
}

.New {
  background-image: url("../assets/Rectangle 1330.png");
  position: relative;
  grid-area: New;
}

.stock2 {
  background-image: url("../assets/Rectangle 1331.png");
  position: relative;
  grid-area: stock2;
}

.stock:hover,
.New:hover,
.Dewait:hover,
.stock2:hover {
  cursor: pointer;
  color: #ff8a42;
  filter: brightness(70%); // Применяем эффект "тусклости" при наведении
}
</style>
