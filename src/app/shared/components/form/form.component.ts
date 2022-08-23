import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IWatchLlist } from 'src/app/core/services/models/watchList.models';
import { WatchListService } from 'src/app/core/services/watchList/watch-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public coin?: IWatchLlist;

  public coinForm?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private watchListService: WatchListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.coinForm = this.fb.group({
      _id: new FormControl(this.coin ? this.coin._id : '', [Validators.required] ),
      name: new FormControl(this.coin ? this.coin.name : '', [Validators.required]),
      price: new FormControl(this.coin ? this.coin.price : '', [Validators.required]),
      image: new FormControl(this.coin ? this.coin.image : '', [Validators.required])
    })
  }

  uploadCoin(){
    const formValue = this.coinForm?.value
    const coinAdd$ = this.coin
    ? this.watchListService.editCoin(this.coin._id, formValue)
    : this.watchListService.addCoinToWatchlist(formValue);
    coinAdd$.subscribe((coin)=>{
      console.log(coin);
      this.router.navigate(['/user-watchlist'])
    })
  }

}
