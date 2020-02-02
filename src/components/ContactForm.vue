<template>
    <div>
        <br>
        <div  v-if="submitError" class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p class="font-bold">Wystąpił błąd</p>
            <p class="text-sm">Uzupełnij poprawnie wymagane pola oznaczone gwiazdką!</p>
        </div>

        <form @submit.prevent="submit" class="mt-4 lg:pr-16">
            <input type="text" v-model="formData.name" placeholder="Imię i nazwisko *"
                   class="appearance-none w-full border-b border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none">
            <input type="text" v-model="formData.email" placeholder="Email *"
                   class="appearance-none w-full border-b border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none">
            <input type="text" v-model="formData.phone" placeholder="Telefon"
                   class="appearance-none w-full border-b border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none">
            <textarea rows="10" v-model="formData.message" placeholder="Wiadomość *"
                      class="appearance-none w-full border border-primary-lighter py-2 mt-4 focus:border-primary focus:outline-none"></textarea>
            <button type="submit"
                    class="font-bebas uppercase leading-none relative mt-4 border px-4 py-2 hover:text-primary">napisz
                do
                mnie
            </button>
        </form>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'

    Vue.use(Vuelidate);
    import {required, minLength, email} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                },
                submitError: false,
            }
        },
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitError = true
                } else {
                    this.submitError = false
                }
            }
        },
        validations: {
            formData: {
                name: {
                    required,
                    minLength: minLength(4)
                },
                email: {
                    required,
                    email
                },
                message: {
                    required,
                    minLength: minLength(20)
                },
            }
        }
    }
</script>