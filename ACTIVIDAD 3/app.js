// Insertar documentos en la colección Estudiantes
db.Estudiantes.insertMany([
    { "nombre": "Juan", "edad": 20, "ciudad": "Bogotá" },
    { "nombre": "Ana", "edad": 22, "ciudad": "Medellín" },
    { "nombre": "Luis", "edad": 19, "ciudad": "Cali" },
    { "nombre": "Carlos", "edad": 24, "ciudad": "Barranquilla" },
    { "nombre": "Laura", "edad": 18, "ciudad": "Cartagena" }
]);

// Consultar todos los documentos de la colección Estudiantes
db.Estudiantes.find();

// Consultar estudiantes que viven en Bogotá
db.Estudiantes.find({ "ciudad": "Bogotá" });

// Consultar estudiantes mayores de 20 años
db.Estudiantes.find({ "edad": { $gt: 20 } });