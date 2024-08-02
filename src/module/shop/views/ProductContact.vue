<template>
  <section class="w-[78%] px-1 flex flex-row gap-4 h-[85vh] pb-4 mt-32">
    <div class="bg-[#212121] rounded-[50px] w-[44%] flex flex-col gap-6 p-10 justify-center">
      <h1 class="text-[#FBFBFB] text-7xl font-bold tracking-tighter">
        Do you want specialized care?
      </h1>
      <p class="text-[#787878] text-lg font-mono">
        you can send me <br />
        a message or <br />
        send me an email
      </p>
    </div>
    <div
      class="bg-[#fbfbfb] rounded-[50px] w-[56%] flex flex-col items-center justify-center gap-10"
    >
      <div
        class="flex flex-col items-start gap-2 px-7 py-8 w-1/2 shadow-lg shadow-[#00000023] rounded-lg"
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
        class="flex flex-col items-start gap-2 px-7 py-8 w-1/2 shadow-lg shadow-[#00000023] rounded-lg"
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
          >matiasaquinocastro121@gmail.com</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import WhatsAppLogo from '@/module/common/icons/WhatsAppLogo.vue';
import EmailLogo from '@/module/common/icons/EmailLogo.vue';
</script>
