let ThisCalc  = document.Calculation; //Определяю объект, с которым буду работать
let CurResult = 0; //хранит текущий численный результат
let IsNewNumFlag = false; //определяю вводится новое число или нет
let OperPending = "";// хранит текущее нажатое значение
 
//функция обрабатывает кнопки с цифрами
function PressedNum (Num) 
{
		if (IsNewNumFlag)//если ввод нового числа, т.е. первой его цифры
		{
			ThisCalc.ReadOut.value = Num;
			IsNewNumFlag = false;
		}	
		else {//если не новое
			if (ThisCalc.ReadOut.value == "0")//если был сброс и стоит 0
//то заменяем его на новую цифру
				ThisCalc.ReadOut.value = Num;
			else
//иначе дописываем цифры
				ThisCalc.ReadOut.value += Num;
		}
}
 
//функция обрабатывает кнопки с арифметическими операциями
function Operations (Op) 
{
		var Readout = ThisCalc.ReadOut.value;
		if (IsNewNumFlag && OperPending != "=")
		{
			ThisCalc.ReadOut.value = CurResult;
		}
		else
		{
			IsNewNumFlag = true;
			if ( '+' == OperPending )
				CurResult += parseFloat(Readout);
			else if ( '-' == OperPending )
				CurResult -= parseFloat(Readout);
			else if ( '/' == OperPending )
				CurResult /= parseFloat(Readout);
			else if ( '*' == OperPending )
				CurResult *= parseFloat(Readout);
			else
				CurResult = parseFloat(Readout);
			ThisCalc.ReadOut.value = CurResult;
			OperPending = Op;
		}
}
 
 
// Очистка текущей цифры
function ClearEntry () 
{
		ThisCalc.ReadOut.value = "0";
		IsNewNumFlag = true;
}
 
// Сброс всех параметров калькулятора
function Clear () 
{
		Currents = 0;
		OperPending = "";
		ClearEntry();
}