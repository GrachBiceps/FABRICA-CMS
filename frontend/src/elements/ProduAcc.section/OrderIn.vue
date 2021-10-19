<template>
    <div>
    <table style = " width: 100%;">
    <colgroup>
        <col span="1" style="background:rgba(59, 130, 246, 0.5)"><!-- С помощью этой конструкции задаем цвет фона столбцов таблицы-->
        <col span="1" style="background:rgba(59, 130, 246, 0.3)"><!-- С помощью этой конструкции задаем цвет фона столбцов таблицы-->
        <col span="1" style="background-color:rgba(59, 130, 246, 0.2)"><!-- Задаем цвет фона для следующего (одного) столбца таблицы-->
        <col span="1" style="background-color:rgba(59, 130, 246, 0.1)"><!-- Задаем цвет фона для следующего (одного) столбца таблицы-->
    </colgroup>
    <tr>
        <th style = "border-bottom: 2px solid rgba(224, 255, 255, 0.15)">№</th>
        <th style = "border-bottom: 2px solid rgba(224, 255, 255, 0.15)">Наименование</th>
        <th style = "border-bottom: 2px solid rgba(224, 255, 255, 0.15)">Единица измерения</th>
        <th style = "border-bottom: 2px solid rgba(224, 255, 255, 0.15)">Кол-во</th>

    </tr>
    <tr>
        <td style = "text-align: center; ">1</td>
        <td style = "text-align: left; padding-left: 6px">Сахар</td>
        <td style = "text-align: center">кг</td>
        <td style = "text-align: center">15</td>
    </tr>
    <tr>
        <td style = "text-align: center">2</td>
        <td style = "text-align: left; padding-left: 6px">Соль</td>
        <td style = "text-align: center">кг</td>
        <td style = "text-align: center">5</td>
    </tr>  
    <tr>
        <td style = "text-align: center">3</td>
        <td style = "text-align: left; padding-left: 6px">Соевый соус</td>
        <td style = "text-align: center">л</td>
        <td style = "text-align: center">2</td>
    </tr>   
</table>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>