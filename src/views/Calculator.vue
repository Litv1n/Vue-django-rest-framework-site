<template>
<div class="calculator">
    <input placeholder="Место загрузки(город)" required v-model="first_city">
    <input placeholder="Место выгрузки(город)" required v-model="second_city">
    <input placeholder="Количество километров" v-model="way" required>
    <input placeholder="Масса груза" required v-model="weight">
    <input placeholder="Объем груза" required v-model="capacity">
    <input placeholder="Температурный режим для груза(в цельсиях)" required v-model="temperature">
</div>
<div class="col text-center">
    <button class="btn btn-default btn-outline-danger" @click="calculate">Расчитать</button>
    <div class="container">
        <div class="alert alert-primary" v-if="result !== null && result !== 0">Предварительная стоимость перевозки - {{ result }}Р. Для дополнительной информации свяжитесь с нами любым удобным для вас способом(e-mail, телефон).</div>
        <div class="alert alert-primary" v-else>Этот калькулятор поможет Вам узнать стоимость доставки.</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            way: null,
            result: null,
            first_city: null,
            second_city: null,
            weight: null,
            capacity: null,
            temperature: null,
        }
    },
    methods: {
        calculate() {
            this.errors = []
            

            /* Check if fields are not empty */
            if (!this.first_city) {
            this.errors.push('Требуется указать место загрузки.');
            }
            if (!this.second_city) {
            this.errors.push('Требуется указать место выгрузки.');
            }           
            if (!this.way) {
            this.errors.push('Требуется указать количество километров.');
            }
            if (!this.weight) {
            this.errors.push('Требуется указать массу груза.');
            }
            if (!this.capacity) {
            this.errors.push('Требуется указать объем груза.');
            }
            if (!this.temperature) {
            this.errors.push('Требуется указать температуру.');
            }
            if (this.errors.length == 0){
                this.result = Math.floor((this.way / 50) * 700)
            }
        }
    }
}
</script>

<style>
.calculator {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-auto-columns: minmax(300px, auto);
}
.alert {
    margin-top: 10px;
}
.btn {
    margin-top: 10px;
}

</style>

