<script lang="ts">
  import { Linkedin, Github, Twitter, Mail } from '@lucide/svelte';

  let { text, url, icon }: { text: string; url: string; icon?: string } = $props();

  const iconMap = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
    mail: Mail
  };

  const IconComponent = $derived(icon && iconMap[icon as keyof typeof iconMap] ? iconMap[icon as keyof typeof iconMap] : null);
</script>

<a href={url} class="badge border-inherit badge-md gap-2">
  {#if IconComponent}
    <IconComponent size={16} />
  {/if}
  {text}
</a>

