<template>
  <div class="my-[25px]">
    <h1 class="text-[30px] font-bold">
      {{ $t("about.title") }}
    </h1>
    <div class="pt-[25px]">
      <p>
        {{ $t("about.titleText") }}
      </p>
      <h1 class="text-[30px] font-bold pt-[30px]">{{ $t("about.title2") }}</h1>

      <ol
        class="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400 text-[20px] pt-[25px]"
      >
        <li>
          {{ $t("about.list1") }}
          <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              {{ $t("about.list1text") }}
            </li>
          </ul>
        </li>
        <li>
          {{ $t("about.list2") }}
          <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              {{ $t("about.list2text") }}
            </li>
          </ul>
        </li>
        <li>
          {{ $t("about.list3") }}
          <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              {{ $t("about.list3text") }}
            </li>
          </ul>
        </li>

        <li>
          {{ $t("about.list4") }}
          <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              {{ $t("about.list4text") }}
            </li>
          </ul>
        </li>
        <li>
          {{ $t("about.list5") }}
          <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              {{ $t("about.list5text") }}
            </li>
          </ul>
        </li>
        <li>
          {{ $t("about.list6") }}
          <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
            <li>
              {{ $t("about.list6text") }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
