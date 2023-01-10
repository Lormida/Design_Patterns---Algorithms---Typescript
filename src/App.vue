<script setup lang="ts">
import { FinishCommand, Invoker, StartCommand } from './design-patternes/Behavioral/Command'

const invoker = new Invoker()

invoker.setOnStart(new StartCommand())
invoker.setOnFinish(new FinishCommand())

invoker.doSomeAction()
</script>

<template>
  <p>Hello i'm fake page</p>
</template>

<style lang="scss" scoped></style>
