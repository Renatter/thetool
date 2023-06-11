<template>
  <div class="pt-[50px] flex justify-between">
    <div class="text w-[380px] mb-[52px]">
      <h1 class="text-[32px] font-bold mb-[24px]">{{ $t("news.title") }}</h1>
      <p>
        {{ $t("news.titleText") }}
      </p>
    </div>
    <div class="flex">
      <div>
        <div
          class="max-w-sm h-[380px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-[15px]"
        >
          <a href="#">
            <img
              class="rounded-t-lg max-h-[250px] w-[420px]"
              src="https://static.tildacdn.com/tild3436-3465-4736-a561-343134613938/shutterstock_6249989.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-[15px] font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t("news.text1") }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              12 января 2023
            </p>
          </div>
        </div>
        <div
          class="max-w-sm h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-[15px]"
        >
          <img
            class="rounded-t-lg max-h-[250px] w-[420px]"
            src="https://trashbox.ru/ifiles/1362534_82f61a_graph.jpg-orig/grafen-nginx-i-reshenie-zadachi-tysyacheletiya-glavnye-rossijskie-izobreteniya-i-otkrytiya-21-veka-4.jpg"
            alt=""
          />

          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-[15px] font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t("news.text2") }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              12 января 2023
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-[15px]"
        >
          <a href="#">
            <img
              class="rounded-t-lg max-h-[250px] w-[420px]"
              src="https://prekrasnaja.com/wp-content/uploads/2022/10/0-3.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-[15px] font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t("news.text3") }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              12 января 2023
            </p>
          </div>
        </div>
        <div
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-[15px]"
        >
          <a href="#">
            <img
              class="rounded-t-lg max-h-[250px] w-[420px]"
              src="https://rstart-shop.ru/wp-content/uploads/e/5/d/e5db42e920569ce9c64569175a8ffcbf.jpeg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-[15px] font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t("news.text4") }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              12 января 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
