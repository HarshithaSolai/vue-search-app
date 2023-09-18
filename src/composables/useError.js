import { ref } from 'vue';

export function useError() {
  const error = ref(null);
  const apiError = ref(null);

  const setError = (message) => {
    error.value = new Error(message);
  };

  const setApiError = (error) => {
    apiError.value = error;
  };

  const clearErrors = () => {
    error.value = null;
    apiError.value = null;
  };

  return {
    error,
    apiError,
    setError,
    setApiError,
    clearErrors
  };
}
