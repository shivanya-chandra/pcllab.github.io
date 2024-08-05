# MTurk Calculator

Enter:

* Duration (Example: 30 min)
* Amount paid per subject (Example: $3)
* Number of subjects (Example: 100)


<!-- <div class="bootstrap-iso"> -->
<!-- <div id="form-message"></div> -->
<div class="panel panel-default" id="lab-form">
            <div class="panel-heading"><h3>Lab Paid Experiment Form</h3></div>
            <form class="form panel-body">
                <fieldset>
                    <!-- Number of Experiment Sessions -->
                    <div class="form-group">
                        <label class="text-left">Number of Experiment Sessions</label>

                        <div class="radio radio-primary">
                            <label>
                                <input type="radio" name="optionsNumExp" id="numExpRadios1" value="1" checked="">
                                1
                            </label>
                        </div>
                        <div class="radio radio-primary">
                            <label>
                                <input type="radio" name="optionsNumExp" id="numExpRadios2" value="2">
                                2
                            </label>
                        </div>
                        <div class="radio radio-primary">
                            <label>
                                <input type="radio" name="optionsNumExp" id="numExpRadios3" value="other">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="other_num" placeholder="other" onkeypress="return isNumOrDot(event)">
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- Duration of Experiment -->
                    <div class="form-group">
                        <label for="experiment_duration" class="control-label">Duration of Experiment</label>
                        <span class="help-block">If multi-session, indicate each session and total duration. (Example: 30 min)</span>

                        <div class="input-group">
                            <div class="input-group-addon">Minutes</div>
                            <input type="text" class="form-control" id="experiment_duration" placeholder="experiment duration">
                        </div>
                    </div>

                    <!-- Amount Paid Per Subject -->
                    <div class="form-group">
                        <label for="amount_paid" class="control-label">Amount Paid Per Subject</label>
                        <span class="help-block">For MTurk, rate is $1 per 10 minutes. (Example: $3)</span>

                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input type="text" class="form-control" id="amount_paid" placeholder="amount paid per subject" onkeypress="return isNumOrDot(event)">

                        </div>
                    </div>

                    <!-- Number of Subjects -->
                    <div class="form-group">
                        <label for="num_subjects" class="control-label">Number of Subjects</label>
                        <span class="help-block">(Example: 100)</span>
                        <div class="input-group">
                            <div class="input-group-addon">N</div>
                            <input type="text" class="form-control" id="num_subjects" placeholder="number of subjects" onkeypress="return isNumOrDot(event)">
                        </div>
                    </div>

                    <!-- Total Amount for Subjects -->
                    <div class="form-group">
                        <label for="total_amount_subjects" class="control-label">Total Amount for Subjects</label>
                        <span class="help-block">Rate x Number of Subjects. (Example: $300)</span>

                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input type="text" class="form-control" id="total_amount_subjects" placeholder="total amount" onkeypress="return isNumOrDot(event)">
                        </div>
                    </div>

                    <!-- Amazon MTurk Fees -->
                    <div class="form-group">
                        <label for="mturk_fees" class="control-label">Amazon MTurk Fees</label>
                        <span class="help-block">Amazon Rate ($0.20) x Total Amount for Subjects. (Example: $60)</span>

                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input type="text" class="form-control" id="mturk_fees" placeholder="MTurk fees" onkeypress="return isNumOrDot(event)">
                        </div>
                    </div>

                    <!-- TurkPrime Fees -->
                    <div class="form-group">
                        <label for="tp_fees" class="control-label">TurkPrime Fees</label>
                        <span class="help-block">Number of Subjects x ($0.02 + 5% of Amount Per Subject).</span>

                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input type="text" class="form-control" id="tp_fees" placeholder="TurkPrime fees" onkeypress="return isNumOrDot(event)">
                        </div>
                    </div>

                    <!-- Total Amount Requested -->
                    <div class="form-group">
                        <label for="total_amount" class="control-label">Total Amount Requested</label>
                        <span class="help-block">Total for Subjects + Total Fees</span>

                        <div class="input-group">
                            <div class="input-group-addon">$</div>
                            <input type="text" class="form-control" id="total_amount" placeholder="total amount" onkeypress="return isNumOrDot(event)">
                        </div>
                    </div>

                    <hr class="half-rule">
                    <div class="form-group">
                        <div class="col-md-12 text-center">
                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        </div>