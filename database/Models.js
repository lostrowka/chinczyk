module.exports = function (mongoose) {
    
	// dla skrócenia późniejszej pisowni 
    
	var Schema = mongoose.Schema;
    
	// przykładowy schemat podatnika
	// zawiera niezbędne informacje na temat struktury tworzonego dokumentu
	// zwłaszcza : typ danych, czy pole jest wymagane, wartości domyślne, ew zakres
    
	var wygranySchema = new Schema(
        {
            num:        { type: Number, required:true },
            nick:		{ type: String, required:true },
            kolor:      { type: String, required:true }
        });
    
    
    // obiekt który chcemy wyeksportować z tego pliku
	// może zawierać więcej niż jeden model,
	// co jest zakomentowane

    var models = {
        Wygrany: mongoose.model("Wygrany", wygranySchema) ,  
		// Kierowca: mongoose.model("Kierowca", kierowcaSchema) , 
		// Inny: mongoose.model("Inny", innySchema) ,   
    }

    return models;
        
}