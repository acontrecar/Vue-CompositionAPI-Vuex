import axios from "axios";
import { ref } from "vue";

const useUsers = () => {
  const isLoading = ref(true);
  const users = ref([]);
  const currentPage = ref(1);
  const errorMesage = ref();

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1;

    isLoading.value = true;

    const { data } = await axios.get("https://reqres.in/api/users", {
      params: {
        page,
      },
    });

    if (data.data.length > 0) {
      users.value = data.data;
      currentPage.value = page;
      errorMesage.value = null;
    } else if (currentPage.value > 0) {
      errorMesage.value = "No hay mas usuarios";
    }

    users.value = data.data;
    isLoading.value = false;
  };

  getUsers();

  return {
    isLoading,
    users,
    currentPage,
    errorMesage,

    nextPage() {
      getUsers(currentPage.value + 1);
    },
    prevPage() {
      getUsers(currentPage.value - 1);
    },
  };
};
export default useUsers;
