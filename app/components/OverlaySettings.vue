<template>
<div>
  <div class="section">
    {{ $t('This is an experimental feature.  Use at your own risk.') }}
    <br/>
    <br/>
    <button
      class="button button--sm button--action margin-right--20"
      :disabled="busy"
      @click="saveOverlay">
      {{ $t('Export Overlay File') }}
      <i class="fa fa-spinner fa-pulse" v-if="busy" />
    </button>
    <button
      class="button button--sm button--action"
      :disabled="busy"
      @click="loadOverlay">
      {{ $t('Import Overlay File') }}
      <i class="fa fa-spinner fa-pulse" v-if="busy" />
    </button>
    <br/>
    {{ message }}
  </div>
  <div class="section">
    <button
      class="button button--sm button--action"
      :disabled="busy"
      @click="loadWidget">
      {{ $t('Import Widget File in Current Scene') }}
      <i class="fa fa-spinner fa-pulse" v-if="busy" />
    </button>
  </div>
  <div class="section">
    <ObsBoolInput :value="mediaBackupOptOut" @input="setMediaBackupOptOut" />
  </div>
</div>
</template>

<script lang="ts" src="./OverlaySettings.vue.ts"></script>
