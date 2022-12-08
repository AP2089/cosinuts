import {ref} from 'vue';

export default () => {
  const menuCatalogIsActive = ref(false);

  const menuCatalogChange = value => {
    menuCatalogIsActive.value = value;
  }

  return {
    menuCatalogIsActive,
    menuCatalogChange
  }
}