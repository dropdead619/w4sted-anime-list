<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth.store';
import { email as emailValidator, required } from '@/config/validation-rules';

const validationSchema = {
  email: [required, emailValidator],
  password: required,
};

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const responseErrors = ref('');

const loginMode = ref('signIn');
const auth = useAuthStore();
const router = useRouter();
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');
const loginModeName = computed(() => {
  return loginMode.value === 'signIn' ? 'Sign In' : 'Sign Up';
});

const switchModeButtonText = computed(() => {
  return loginMode.value === 'signIn' ? 'No account? Create it' : 'Already have account? Log in';
});

function toggleMode() {
  loginMode.value = loginMode.value === 'signIn' ? 'signUp' : 'signIn';
}

const onSubmit = handleSubmit(async (values: unknown) => {
  try {
    if (loginMode.value === 'signUp')
      await auth.signup(values);
    else
      await auth.signin(values);
  }
  catch (error) {
    responseErrors.value = error as string;
  }
  router.push({ name: 'default' });
});
</script>

<template>
  <div class="flex flex-col items-center justify-center py-24">
    <div class="mb-4">
      <h1 class="m-4 text-4xl font-bold ">
        {{ loginModeName }}
      </h1>
    </div>
    <BaseCard class="w-full max-w-lg p-12 bg-slate-200 dark:bg-theme-dark-1 drop-shadow-[0rem_0rem_0.7rem_#f0f]">
      <form
        class="m-auto"
        @submit.prevent="onSubmit"
      >
        <div class="mb-4">
          <BaseInput
            v-model.trim="email"
            :error="errors.email"
            label="Email: "
            placeholder="email"
          />
        </div>
        <div class="mb-4">
          <BaseInput
            v-model.trim="password"
            :error="errors.password"
            label="Password: "
            type="password"
            placeholder="password"
          />
        </div>
        <div class="flex justify-between">
          <BaseButton class="bg-primary">
            {{ loginModeName }}
          </BaseButton>
          <button
            type="button"
            @click="toggleMode"
          >
            {{ switchModeButtonText }}
          </button>
        </div>
      </form>
      <div v-if="responseErrors" class="mt-5 text-center text-red-500">
        {{ responseErrors }}
      </div>
    </BaseCard>
  </div>
</template>
