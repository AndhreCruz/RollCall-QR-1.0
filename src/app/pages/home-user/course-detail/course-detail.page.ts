import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignaturesAPIService } from 'src/app/services/signatures-api.service';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  course: any; // Almacena la asignatura seleccionada
  signatures: any[] = [];
  result: string = ''

  constructor(
    private activatedrouter: ActivatedRoute,
    private signatureService: SignaturesAPIService
  ) {}

  ngOnInit() {
    // Captura el id de la URL
    this.activatedrouter.paramMap.subscribe(paramMap => {
      const courseId = paramMap.get('placeId'); // Obtén el id de la asignatura

      // Llama al servicio para obtener todas las asignaturas
      this.signatureService.getSignatures().subscribe((data) => {
        this.signatures = data;

        // Encuentra la asignatura que coincide con el id
        this.course = this.signatures.find(signature => signature.id === courseId);

        console.log(this.course); // Verifica que hayas obtenido la asignatura correcta
      });
    });
  }

  async openCamera(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    this.result = result.ScanResult;
  }
}

