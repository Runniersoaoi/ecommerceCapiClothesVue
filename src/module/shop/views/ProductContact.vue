<template>
  <section
    class="lg:w-[78%] lg:px-1 flex lg:flex-row gap-4 lg:h-[85vh] lg:pb-4 lg:min-w-[900px] mb-4 mt-32 w-[94%] min-w-0 flex-col bg-[#fbfbfb] lg:bg-transparent rounded-[50px] shadow-lg shadow-[#00000023] lg:shadow-none lg:border-none lg:py-0 px-12 py-20"
  >
    <div
      class="lg:bg-[#212121] lg:rounded-[50px] lg:w-[44%] flex flex-col gap-6 p-10 justify-center"
    >
      <h1
        class="lg:text-[#FBFBFB] text-[#212121] font-bold tracking-tighter lg:text-7xl md:text-6xl text-5xl"
      >
        Do you want specialized care?
      </h1>
      <p class="text-[#787878] text-lg font-mono">
        you can send me <br />
        a message or <br />
        send me an email
      </p>
    </div>
    <div
      class="lg:bg-[#fbfbfb] lg:rounded-[50px] lg:w-[56%] flex lg:flex-col md:flex-row flex-col items-center justify-center lg:gap-10 lg:shadow-lg lg:shadow-[#00000023] gap-10"
    >
      <div
        class="flex flex-col items-start gap-2 px-7 py-8 md:w-1/2 shadow-lg shadow-[#00000023] rounded-lg md:min-w-[350px] w-3/4"
      >
        <WhatsAppLogo class="h-12" />
        <h4 class="text-3xl font-bold">WhatsApp</h4>
        <p class="font-mono text-sm">
          For faster and more direct attention, contact us by WhatsApp
        </p>
        <a
          target="_blanck"
          href="https://wa.me/+51947434987"
          class="text-[#FF5314] text-xl font-bold font-mono"
          >947434987</a
        >
      </div>
      <div
        class="flex flex-col items-start gap-2 px-7 py-8 md:w-1/2 shadow-lg shadow-[#00000023] rounded-lg md:min-w-[350px] w-3/4"
      >
        <EmailLogo class="h-12" />
        <h4 class="text-3xl font-bold">Email</h4>
        <p class="font-mono text-sm">
          We will respond to you within a maximum of 48 hours during business hours
        </p>
        <a
          target="_blanck"
          href="mailto:matiasaquinocastro121@gmail.com"
          class="text-[#FF5314] text-lg font-bold font-mono"
          >capiclothe@gmail.com</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import WhatsAppLogo from '@/module/common/icons/WhatsAppLogo.vue';
import EmailLogo from '@/module/common/icons/EmailLogo.vue';
</script>
