export const formatNumberComma = (n) => {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const formatCurrency = (value) => {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  // get input value
  let input_val = value;
  // don't validate empty input
  if (input_val === "") {
    return "";
  }
  // check for decimal
  if (input_val.indexOf(".") >= 0) {
    //   // get position of first decimal
    //   // this prevents multiple decimals from
    //   // being entered
    let decimal_pos = input_val.indexOf(".");

    //   // // split number by decimal point
    let left_side = input_val.substring(0, decimal_pos);
    let right_side = input_val.substring(decimal_pos);

    //   // // add commas to left side of number
    left_side = formatNumberComma(left_side);

    //   // // validate right side
    right_side = formatNumberComma(right_side);

    //   // On blur make sure 2 numbers after decimal
    //   // if (blur === "blur") {
    //   //   right_side += "00";
    //   // }

    //   // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    //   // join number by .
    input_val = left_side + "." + right_side;
    // input_val = input_val;
  } else {
    //   // no decimal entered
    //   // add commas to number
    //   // remove all non-digits
    input_val = formatNumberComma(input_val);
    // input_val =  input_val;

    //   // final formatting
    //   // if (blur === "blur") {
    //   //   input_val += ".00";
    //   // }
  }
  // send updated string to input
  //   input_val = formatNumberComma(input_val);
  //   input_val = "$" + input_val;
  return input_val;
};
